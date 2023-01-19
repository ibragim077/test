let categories_button = document.querySelectorAll(".categories_button");

let posts = document.querySelectorAll('.item');

let rows = document.querySelectorAll('.row');

for(let b of categories_button)
{
    b.addEventListener("click", function()
    {
        for(let p of posts)
        {
            if(p.dataset.categories.indexOf(b.dataset.categories)<0)
            {
                p.remove();
            }
            else
            {
                p.style.display = "flex";
            }
            for(let r of rows)
            {
               if(r.innerHTML.trim().length == 0)
               {
                  r.remove();
               }
            }
        }
    });
}