/**
 * 
 *          In order to see the issue with my first approach (Not My First Submission) read the "README.md" file.
 * 
 *                                      
 *          Please read "README.md" file in order to have a full view about what's happening.
 * 
 * 
 *          Below is my second approach:
 * 
 * 
 */



//By using the .getElementById I selected the element that has id of navbar__list which is the ul element that in the nav element
let navigationBarUnorderedList  = document.getElementById("navbar__list");

//By using .querySelectorAll() function select all the section element's in the HTML file
let selectAllSections = document.querySelectorAll("section");


//Creating a function that called createNavigationBarListElement
//The purpose of this function is to see how many sections are in the HTML file and create a list element in the unordered list element
function createNavigationBarListElement() {

    //Using the forEach loop in order to loop in the selectAllSections Array
    selectAllSections.forEach( function(section) {

        //Creating li elements by using the createElement function and save it in the listElement variable
        let listElement = document.createElement("li");

        /**
         * 
         *  IMPORTANT
         *  
         *  The reviewer said:
         * 
         *      What you have done correctly!
         *      You have added a smooth scroll behavior to allow your section to fit nicely into the viewport.
         *
         *      What you have to do to improve your code!
         *      You can get rid of the href attribute at line 37 for a more consistent code.
         * 
         * ======================================================
         * 
         *  My old code:
         *      
         *      //Modifying the li element by using the .innerHTML function
         *      //Create a a element that has class, data-link (special attribute ), and href attribute
         *      listElement.innerHTML = `<a class="scroll menu__link" data-link="${section.id}" href="#${section.id}" >${section.dataset.nav}</a>`;
         * 
         * ======================================================
         * 
         *  My note:
         * 
         *      If I removed the href attribute the mouse pointer would be "Text Pointer" and "Standard Pointer" when trying to click
         *      on the navigation bar items. Therefore, in oder to make the href attribute do nothing and at the same time get the
         *      "Link Pointer" I'm going to set the href attribute to "javascript:void(0)"
         * 
         * ======================================================
         * 
         *  My new code:
         */

        //Modifying the li element by using the .innerHTML function
        //Create a a element that has class, data-link (special attribute ), and href attribute
        listElement.innerHTML = `<a class="scroll menu__link clickOnMobile" data-link="${section.id}" href="javascript:void(0)">${section.dataset.nav}</a>`;




        //Add the li element that was created in the ul element
        navigationBarUnorderedList.appendChild(listElement);
        }
    );
};

//Calling the createNavigationBarListElement function
createNavigationBarListElement();


//Adding the footer to the navigation bar so the user can easily navigate to there.
//Since we have only one footer I'm not going to use a loop.
function addFooterToNavigationBar(){
    //Creating li elements  
    let footerList = document.createElement("li");

    //set a id Attribute to the footer
    let foot = document.querySelector(".page__footer");
    foot.setAttribute("id", "foot");

    //Modifying the li element by using the .innerHTML function
    //Create a a element that has class, data-link (special attribute), and href attribute
    footerList.innerHTML = `<a class="scroll scroll_footer menu__link clickOnMobile" data-link="${foot.id}" href="javascript:void(0)">Footer</a>`;
    
    //Add the li element that was created in the ul element
    navigationBarUnorderedList.append(footerList);
}

//Calling the addFooterToNavigationBar function
addFooterToNavigationBar();



function viewportForSection(){
    //Detect the element location relative to the viewport using .getBoundingClientRect() built-in function.
    window.addEventListener('scroll', function(event) {

        //loop in the selectAllSections variable (Array) by using forEach loop
        selectAllSections.forEach(function (activeClass) {

            //By using the .querySelector function select the [data-link=${activeClass.id}] (special attribute) and save it in the activeSection variable 
            let activeSection = navigationBarUnorderedList.querySelector(`[data-link=${activeClass.id}]`);
            
            //console.log(activeClass.getBoundingClientRect());
            //print the value of the top by using the function .getBoundingClientRect()
            //console.log(activeClass.getBoundingClientRect().top);

            if (activeClass.getBoundingClientRect().top >= -1300 && activeClass.getBoundingClientRect().top <= 100){
                //If true modify the class attribute to your-active-class
                activeClass.classList.add("your-active-class");

                //console.log(activeClass.classList);

                //Additionally, highlight the section that in the viewport on the navigation bar
                activeSection.classList.add("active-link");

            } else {
                //else remove it
                activeClass.classList.remove("your-active-class");
                activeSection.classList.remove("active-link");
            }
        });
    }
    )
}




function viewportForFooter(){
    //Detect the element location relative to the viewport using .getBoundingClientRect() built-in function.
    window.addEventListener('scroll', function(event) {

        //loop in the selectAllSections variable (Array) by using forEach loop
        document.querySelectorAll("footer").forEach(function (activeClassFooter) {

            //By using the .querySelector function select the [data-link=${activeClass.id}] (special attribute) and save it in the activeSectionFooter variable 
            let activeSectionFooter = navigationBarUnorderedList.querySelector(`[data-link=${activeClassFooter.id}]`);
            
            //console.log(activeClassFooter.getBoundingClientRect());
            //print the value of the top by using the function .getBoundingClientRect()
            //console.log(activeClassFooter.getBoundingClientRect().top);

            if (activeClassFooter.getBoundingClientRect().top >= -1300 && activeClassFooter.getBoundingClientRect().top <= 750){
                //If true highlight the section that in the viewport on the navigation bar         
                activeSectionFooter.classList.add("active-link");

            } else {
                //else remove it
                activeSectionFooter.classList.remove("active-link");
            }
        });
    }
    )
}



/**
 * 
 *  IMPORTANT
 * 
 *  The reviewer said:
 *      
 *      SUGGESTION:
 *      It's recommended to keep all global variables at the top of your script.
 * 
 *  ======================================================
 * 
 *  My note:
 * 
 *      Correct me if I'm wrong or misunderstand something but since I'm using "document.querySelectorAll(".scroll");" 
 *      the class "scroll" need to be created first (In line number 60), thus the "createNavigationBarListElement();" 
 *      and "addFooterToNavigationBar();" function must run before "document.querySelectorAll(".scroll");" run. 
 *      That means I can’t keep (add) this global variable at the top of my script. Notice that I tried three-way to add it at the top of my script, 
 *      and I failed (the script wasn't working properly).  
 * 
 * 
 */


//By using .querySelectorAll() function select all the element that has "scroll" as a class value 
const scrollToSection = document.querySelectorAll(".scroll");

function scrollSection(){
    scrollToSection.forEach (function(i){
        //Add event that listen to a mouse click
        i.addEventListener("click", function(Event){
            Event.preventDefault();
            //Save the value of the data-link attribute in variable called element
            const element = document.getElementById(i.getAttribute("data-link"));
            //By using the .scrollIntoView function scroll smooth to the start of the section that got clicked.
            element.scrollIntoView({
                behavior:"smooth", 
                block:"start"
            });

        })
    })
}



/**
 *   Suggested:
 *      Hide fixed navigation bar while not scrolling (it should still be present on page load).
 *      Hint: setTimeout can be used to check when the user is no longer scrolling.
 */

function checkIfTheUserIsStillScrolling(){
    //Select the header by using the .querySelector function
    const theHeader = document.querySelector(".page__header");

    //Create a variable called theUserIsStillScrolling
    let theUserIsStillScrolling;

    //Listen for event, the type of the event is scroll
    document.addEventListener('scroll', function() {
        //The display of the header element is block
        theHeader.style.display = "block";

        //canceling the timeout that previously established by calling setTimeout().
        clearTimeout(theUserIsStillScrolling);

        //The navigation bar is going to Disappear after six seconds 
        theUserIsStillScrolling = setTimeout( function() {theHeader.style.display = "none";}, 6000); 

    });
}



//Call the the viewportForSection function
viewportForSection();

//Call the the viewportForFooter function
viewportForFooter();

//Call the the scrollSection function
scrollSection();

//Call the the checkIfTheUserIsStillScrolling function
checkIfTheUserIsStillScrolling();










