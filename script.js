let currentState = "start";


function showScene() {
   const img = document.getElementById("imageImage");
   const caption = document.getElementById("imageCaption");
   const button1 = document.getElementById("button1");
   const button2 = document.getElementById("button2");
   const button3 = document.getElementById("button3");
   const button4 = document.getElementById("button4");
   const endingMessage = document.getElementById("endingMessage");


   endingMessage.classList.add("hidden");
   button1.classList.remove("hidden");
   button2.classList.remove("hidden");
   button3.classList.add("hidden");
   button4.classList.add("hidden");


   if (currentState === "start") {
       img.src = "images/oceanStart.jpg";
       caption.textContent = "You were swept away from seasnail island and now in the middle of the Carribean Sea.";
       button1.textContent = "Dive down to hunt big fish";
       button2.textContent = "Continue swimming for an hour";
       button1.onclick = () => { currentState = "1"; showScene(); };
       button2.onclick = () => { currentState = "2"; showScene(); };
   } else if (currentState === "1") {
       img.src = "images/underwaterFish.jpg";
       caption.textContent = "Dive down to hunt big fish";
       button1.textContent = "Eat the turtle";
       button2.textContent = "Search corals for food";
       button1.onclick = () => { currentState = "1A"; showScene(); };
       button2.onclick = () => { currentState = "1B"; showScene(); };
   } else if (currentState === "2") {
       img.src = "images/swimming.jpg";
       caption.textContent = "Continue swimming for an hour";
       button1.textContent = "Climb onto floating debris";
       button2.textContent = "Follow a flock of birds";
       button1.onclick = () => { currentState = "2A"; showScene(); };
       button2.onclick = () => { currentState = "2B"; showScene(); };
   } else if (currentState === "1A") {
       img.src = "images/shadow.jpg";
       caption.textContent = '"Ouch," the old fish says.\n "I am not food, but I know where the GOOD food is."';
       button1.textContent = "Approach the creature";
       button2.textContent = "Swim away from the shadow";
       button1.onclick = () => { currentState = "1A1"; showScene(); };
       button2.onclick = () => { currentState = "1A2"; showScene(); };
   } else if (currentState === "1B") {
       img.src = "images/coral.jpg";
       caption.textContent = "Search coral formations for food";
       button1.textContent = "Hunt small fish";
       button2.textContent = "Eat strange glowing algae";
       button1.onclick = () => { currentState = "1B1"; showScene(); };
       button2.onclick = () => { currentState = "1B2"; showScene(); };
   } else if (currentState === "2A") {
       img.src = "images/debris.jpg";
       caption.textContent = "Climb onto floating debris";
       button1.textContent = "Rest on the debris";
       button2.textContent = "Search the debris";
       button1.onclick = () => { currentState = "2A1"; showScene(); };
       button2.onclick = () => { currentState = "2A2"; showScene(); };
   } else if (currentState === "2B") {
       img.src = "images/birds.jpg";
       caption.textContent = "Follow a flock of birds";
       button1.textContent = "Follow them closely";
       button2.textContent = "Ignore the birds and swim away";
       button1.onclick = () => { currentState = "2B1"; showScene(); };
       button2.onclick = () => { currentState = "2B2"; showScene(); };
   } else if (currentState === "1A1") {
       caption.textContent = "Ending: symbiotic twin";
       img.src = "images/ending1A1.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You approach the guy and talk a deal in splitting 50/50 profits in a prohibition lab to sell millions of pounds of illicit seaweed. In symbiosis you both build a seaweed empire in the Caribbean.";
   } else if (currentState === "1A2") {
       caption.textContent = "Ending: starved to death";
       img.src = "images/ending1A2.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You swim away and find no food. You starve to death.";
   } else if (currentState === "1B1") {
       caption.textContent = "Ending: continue fighting for your life";
       img.src = "images/ending1B1.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You hunt the small fish. The struggle continues forever.";
   } else if (currentState === "1B2") {
       caption.textContent = "Ending: you got poisoned";
       img.src = "images/ending1B2.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "The glowing algae tasted strange. Memories start fading and you lose consciousness. You ascend to the afterlife and are reincarnated as a sea slug.";
   } else if (currentState === "2A1") {
       caption.textContent = "Ending: Lucky Rescue";
       img.src = "images/ending2A1.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You rest on the debris and a boat finds you. You are saved.";
   } else if (currentState === "2A2") {
       caption.textContent = "Ending: Treasure island";
       img.src = "images/ending2A2.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You search the debris and find supplies to build a new home.";
   } else if (currentState === "2B1") {
       caption.textContent = "Ending: Christian Returns the your Bugatti";
       img.src = "images/ending2B1.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You follow the birds to shore and are reunited with Christian and his Bugatti.";
   } else if (currentState === "2B2") {
       caption.textContent = "Ending: A big whale eats you";
       img.src = "images/ending2B2.jpg";
       button1.classList.add("hidden");
       button2.classList.add("hidden");
       endingMessage.classList.remove("hidden");
       endingMessage.textContent = "You ignore the birds. A massive whale surfaces and swallows you whole.";
   }
}


document.addEventListener("DOMContentLoaded", () => {
   showScene();
});
