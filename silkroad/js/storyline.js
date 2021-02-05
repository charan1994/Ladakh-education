const storyline = {
    "narration": [
        {
            "id": 1,
            "text": "Welcome to Silk Road, here you will learn how our ancestors in the past used to navigate the treacherous roads. Can you successfully cross it and seal a deal with China? Only time will tell!",
            "backgroundImage": "silkroad-map.jpg",
            "next": "narration.html?id=2"
        },
        {
            "id": 2,
            "text": "As you open your eyes, a desolate path stretches out in front of you, winds howling menacingly, whipping your scarf around. The temperature is -3 degrees and it is a chilling night. You remember your parent, making the trip to beyond the mountains, only to never return. \"Stay far away from the paths\" they warned. \"It will do you no good to follow us\". You sigh, unable to fulfil even their last request. ",
            "backgroundImage": "cold-dark.jpg",
            "next": "narration.html?id=1"
        }
    ]
}

function getObjectById(context, id){
    for(let i = 0; i < storyline[context].length; i++) {
        if (storyline[context][i].id == id) {
            return storyline[context][i];
        }
    }
}

const filename = location.href.split("/").slice(-1)[0];
const params = (new URL(document.location)).searchParams;
const id = params.get("id")

if (filename.substr(0, 9) == "narration"){
    const narrationObject = getObjectById("narration", id);
    
    const narrationDiv = document.getElementById("narration");
    narrationDiv.style.backgroundImage = `url('images/${narrationObject.backgroundImage}')`;
    
    const narrationText = document.getElementById("text");
    narrationText.innerHTML = narrationObject.text;

    const narrationNext = document.getElementById("next");
    narrationNext.href = narrationObject.next;

}
else {
    // TODO: Add code for choice page here

}
