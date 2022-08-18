document.getElementById("add-btn").addEventListener("click", function () {
  const addListItemsValue = document.getElementById("add-list-items").value;
  document.getElementById("add-list-items").value = "";

  const listOuterContainer = document.getElementById("list-outer-container");
  const div = document.createElement("div");
  div.classList.add(
    "p-2.5",
    "rounded",
    "shadow-xl",
    "mb-5",
    "flex",
    "justify-between",
    "items-center"
  );

  const p = document.createElement("p");
  p.setAttribute("id", "list-item");
  p.innerText = addListItemsValue;
  p.classList.add("text-base", "font-semibold");

  const itemsBtnContainer = document.createElement("div");
  itemsBtnContainer.classList.add("flex", "items-center", "gap-2.5");

  const pencil = document.createElement("i");
  pencil.setAttribute("id", "pencil");
  pencil.classList.add(
    "fa-solid",
    "fa-pen-to-square",
    "text-rose-700",
    "text-lg",
    "cursor-pointer"
  );
  const cross = document.createElement("i");
  cross.setAttribute("id", "cross");
  cross.classList.add(
    "fa-solid",
    "fa-xmark",
    "text-rose-700",
    "text-lg",
    "cursor-pointer"
  );

  itemsBtnContainer.appendChild(pencil);
  itemsBtnContainer.appendChild(cross);
  div.appendChild(p);
  div.appendChild(itemsBtnContainer);
  listOuterContainer.appendChild(div);
});

document
  .getElementById("list-outer-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-pen-to-square")) {
      event.target.parentElement.parentElement.firstChild.classList.add(
        "completed"
      );
    }
  });

document
  .getElementById("list-outer-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-xmark")) {
      event.target.parentElement.parentElement.remove();
    }
  });
