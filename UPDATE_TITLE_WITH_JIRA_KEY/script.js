const pageSource = document.documentElement.innerHTML;
const pattern = /(?<=\\"issueKey\\":\\")[A-Z]+-[0-9]+(?=\\")/;
const match = pageSource.match(pattern);
const jiraKey = match ? match[0] : null;
let updatedTitle = jiraKey;

function updateTitleWithjiraKey(updatedTitle) {
	const titleElement = document.querySelector('title');
	const source = document.documentElement.innerHTML;
	const regex = new RegExp(updatedTitle, 'i');
	const match = regex.exec(source);

	if (match && match[0]) {
	  titleElement.textContent = match[0];
	}
  }

  updateTitleWithjiraKey(updatedTitle)
