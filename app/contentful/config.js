const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const environment = "master";

// Hero Section data fetcher
const entryUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries/7DfDZCypudvEPUa10NGqbB/?access_token=${accessToken}`;

async function fetchHeroSectionData() {
  try {
    const entryRes = await fetch(entryUrl);
    if (!entryRes.ok) throw new Error(`HTTP error! status: ${entryRes.status}`);
    const entryData = await entryRes.json();
    // console.log(entryData);
    
    const descriptionLine1 = entryData.fields.descriptionLine1 || "";
    const descriptionLine = entryData.fields.descriptionLine?.content?.[0]?.content?.[0]?.value || "";

    const imageId = entryData.fields.image?.sys?.id;
    let imageUrl = "";
    if (imageId) {
      const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/assets/${imageId}/?access_token=${accessToken}`;
      const assetRes = await fetch(assetUrl);
      if (!assetRes.ok)
        throw new Error(`HTTP error! status: ${assetRes.status}`);
      const assetData = await assetRes.json();
      imageUrl = `https:${assetData.fields.file.url}`;
    }

    return { descriptionLine1, descriptionLine, imageUrl };
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

// Milestones data fetcher
const milestonesUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?content_type=milestones&access_token=${accessToken}`;

export async function fetchMilestonesData() {
  try {
    const milestonesRes = await fetch(milestonesUrl);
    if (!milestonesRes.ok) throw new Error(`HTTP error! status: ${milestonesRes.status}`);

    const milestonesData = await milestonesRes.json();
    // console.log("Raw Milestones Data:", milestonesData); 

    if (!milestonesData.items || milestonesData.items.length === 0) {
      console.error("No milestones found in response:", milestonesData);
      return [];
    }

    const milestones = milestonesData.items.map(item => ({
      title: item.fields.title || "Untitled",
      description: item.fields.description?.content?.[0]?.content?.[0]?.value || "No description",
      date: item.fields.date || "Unknown date",
    }));

    // console.log("Processed Milestones Data:", milestones); 
    return milestones;
  } catch (err) {
    console.error("Error fetching Milestones data:", err);
    return [];
  }
}

// About Section data fetcher
const aboutSectionUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries/4RcsfDN1MZtJru89DMCNLa/?access_token=${accessToken}`;

async function fetchAboutSectionData() {
  try {
    const aboutSectionRes = await fetch(aboutSectionUrl)
    if (!aboutSectionRes.ok) throw new Error(`HTTP error! status: ${aboutSectionRes.status}`);
    const aboutSectionData = await aboutSectionRes.json();
    // console.log("About Section Data", aboutSectionData);
    

    const description = aboutSectionData.fields.description?.content?.[0]?.content?.[0]?.value || "";

    return {description};
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

// My Skills data fetcher
const mySkillsUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?content_type=mySkills&access_token=${accessToken}`;

async function fetchMySkillsData() {
  try {
    const mySkillsRes = await fetch(mySkillsUrl)
    if (!mySkillsRes.ok) throw new Error(`HTTP error! status: ${mySkillsRes.status}`)
    const mySkillsData = await mySkillsRes.json()
    // console.log("My Skills Data", mySkillsData);

    const skills = mySkillsData.items.map((item) => item.fields.skill)
    // console.log(skills);
    
    return  {skills}
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}


const projectsUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?content_type=projects&access_token=${accessToken}`;

async function fetchProjectsData() {
  try {
    const projectsRes = await fetch(projectsUrl);
    if (!projectsRes.ok) throw new Error(`HTTP error! status: ${projectsRes.status}`);

    const projectsData = await projectsRes.json();

    const projects = await Promise.all(projectsData.items.map(async (item) => {
      const title = item.fields.title || "Untitled Project";
      const description = item.fields.description?.content?.[0]?.content?.[0]?.value || "No description available";
      const techStack = item.fields.techStack || "No tech stack listed";
      const projectLink = item.fields.projectLink || "";
      const githubLink = item.fields.githubLink || "";

      // Fetch imageUrl similarly to fetchHeroSectionData
      let imageUrl = "";
      const imageId = item.fields.image?.sys?.id;
      if (imageId) {
        const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/assets/${imageId}/?access_token=${accessToken}`;
        const assetRes = await fetch(assetUrl);
        if (!assetRes.ok) throw new Error(`HTTP error! status: ${assetRes.status}`);
        const assetData = await assetRes.json();
        imageUrl = `https:${assetData.fields.file.url}`;
      }

      return {
        title,
        description,
        techStack,
        projectLink,
        githubLink,
        imageUrl,
      };
    }));

    projects.reverse();

    return projects;
  } catch (err) {
    console.error("Error fetching Projects data:", err);
    return [];
  }
}


module.exports = { fetchHeroSectionData, fetchMilestonesData, fetchProjectsData, fetchAboutSectionData, fetchMySkillsData };


