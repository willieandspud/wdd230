const baseURL = "https://willieandspud.github.io/wdd230/";
const linksURL = "https://willieandspud.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons); 
}

getLinks();

const displayLinks = (lessons) => {
  const activitiesList = document.getElementById('learning-activities');

  lessons.forEach(lesson => {
    const lessonItem = document.createElement('li');
    lesson.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;

      lessonItem.appendChild(anchor);
      lessonItem.appendChild(document.createTextNode(' | '));
    });
    
    if (lessonItem.lastChild) {
      lessonItem.removeChild(lessonItem.lastChild);
    }
    activitiesList.appendChild(lessonItem);
  });
}
