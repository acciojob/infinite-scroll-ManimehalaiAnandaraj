//your code here!
const list=document.getElementById("infi-list");
let itemCount=0;

function addlistItems(numItems) {
	for(let i=0;i<numItems;i++)
		{
			const listItem=document.createElement('li');
			listItem.textContent=`Item ${++itemCount}`;
			list.appendChild(listItem);
		}
}

addlistItems(10)

window.addEventListener('scroll',()=>{
	if(window.innerHTML + window.scrolly >= document.body.offsetHeight)
	{
		addlistItems(2);
	}
});






