/* ==================================================
   GET ELEMENTS
================================================== */
const backgroundMusic = document.getElementById("backgroundMusic");

if (backgroundMusic) {
    backgroundMusic.volume = 0.5;

    document.addEventListener("click", () => {
        backgroundMusic.play().catch(() => {});
    }, { once: true });
}


/* If autoplay is blocked, first interaction starts it */

document.addEventListener(
    "click",
    () => {

        backgroundMusic.play().catch(() => {});

    },
    { once: true }
);

const envelope =
    document.getElementById("envelope");

const openLetter =
    document.getElementById("openLetter");

const openingPage =
    document.getElementById("openingPage");

const letterPage =
    document.getElementById("letterPage");

const continueButton =
    document.getElementById("continueButton");

const memoryIntro =
    document.getElementById("memoryIntro");

const memoryButton =
    document.getElementById("memoryButton");

const scrapbook =
    document.getElementById("scrapbook");


/* ==================================================
   OPEN THE ENVELOPE
================================================== */

openLetter.addEventListener(
    "click",
    () => {

        envelope.classList.add("open");

        openLetter.style.opacity = "0";

        openLetter.style.pointerEvents =
            "none";


        setTimeout(
            () => {

                openingPage.style.display =
                    "none";

                letterPage.style.display =
                    "flex";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            },
            1800
        );

    }
);


/* ==================================================
   TURN THE LETTER PAGE
================================================== */

continueButton.addEventListener(
    "click",
    () => {

        letterPage.style.display =
            "none";

        memoryIntro.style.display =
            "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ==================================================
   OPEN MEMORY SCRAPBOOK
================================================== */

memoryButton.addEventListener(
    "click",
    () => {

        memoryIntro.style.display =
            "none";

        scrapbook.style.display =
            "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        /* Reveal the 5 photos one by one */

        setTimeout(
            () => {

                const memories =
                    document.querySelectorAll(
                        ".memory"
                    );

                memories.forEach(
                    (memory, index) => {

                        setTimeout(
                            () => {

                                memory.classList.add(
                                    "show"
                                );

                            },
                            index * 600
                        );

                    }
                );

            },
            500
        );

    }
);

/* ==================================================
   NEXT: THINGS I LOVE ABOUT YOU
================================================== */

const loveReasons =
    document.getElementById("loveReasons");

const scrapbookEnd =
    document.querySelector(".scrapbook-end");


/* Create a button */

const nextLoveButton =
    document.createElement("button");

nextLoveButton.innerHTML =
    "There are still more reasons ♡";

nextLoveButton.className =
    "next-love-button";


/* Put button at the bottom of scrapbook */

if (scrapbookEnd) {
    scrapbookEnd.appendChild(nextLoveButton);
}


/* When clicked */

nextLoveButton.addEventListener(
    "click",
    () => {

        scrapbook.style.display =
            "none";

        loveReasons.style.display =
            "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

/* ==================================================
   FINAL LETTER BUTTON
================================================== */

const finalLetterButton =
    document.getElementById("finalLetterButton");

const finalLetter =
    document.getElementById("finalLetter");

if (finalLetterButton && finalLetter) {

    finalLetterButton.addEventListener("click", () => {

        loveReasons.style.display = "none";

        finalLetter.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}