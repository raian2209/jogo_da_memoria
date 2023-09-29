// script.js
document.addEventListener("DOMContentLoaded", function () {
    const peopleList = document.getElementById("peopleList");
  
    // Sample data for the people list (You can replace this with your own data)
    const peopleData = [
      {
        name: "Albert Einstein",
        description: "Dísico Teórico alemão, que desenvolveu a teoria da relatividade geral aldasidhaifushfkshdfihifhaifhisfhiasfiaugfiagifgifiagfaigfiafgiaflafsfildhficrhrlcnhchvriahcrilinriarl.kvsr lihvnrheilrnivhueitirhvitrhvtirhtvr geral aldasidhaifushfkshdfihifhaifhisfhiasfiaugfiagifgifiagfaigfiafgiaflafsfildhficrhrlcnhchvriahcrilinriarl.kvsr lihvnrheilrnivhueitirhvitrhvtirhtvrgeral aldasidhaifushfkshdfihifhaifhisfhiasfiaugfiagifgifiagfaigfiafgiaflafsfildhficrhrlcnhchvriahcrilinriarl.kvsr lihvnrheilrnivhueitirhvitrhvtirhtvrgeral aldasidhaifushfkshdfihifhaifhisfhiasfiaugfiagifgifiagfaigfiafgiaflafsfildhficrhrlcnhchvriahcrilinriarl.kvsr lihvnrheilrnivhueitirhvitrhvtirhtvr.",
        image: "john.jpg",
      },
      {
        name: "Jane Smith",
        description: "Jane is a graphic designer.",
        image: "jane.jpg",
      },
      // Add more people data here
    ];
  
    // Populate the list dynamically
    peopleData.forEach((person) => {
      const listItem = document.createElement("li");
      const image = document.createElement("img");
      const description = document.createElement("div");
      const nameElement = document.createElement("h3");
      const descElement = document.createElement("p");
  
      image.src = "./images/" + person.image;
      image.alt = person.name;
      nameElement.textContent = person.name;
      descElement.textContent = person.description;
  
      description.appendChild(nameElement);
      description.appendChild(descElement);
  
      listItem.appendChild(image);
      listItem.appendChild(description);
  
      peopleList.appendChild(listItem);
    });
  });
  