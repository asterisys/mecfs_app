import React, { useState, useEffect } from 'react';

const schemaF = {
    "profile": {
        "username": "string",
        "timestamp": "string"
    },
    "ability": {
        "severity-impact": {
            "question": "How would you rank your overall ME/CFS severity impact on your daily life",
            "rating": "int",
            "rating2": "int",
            "response": "string"
        },
        "selfcare": {
            "question": "Are you able to self care independently?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-selfcare": {
            "question": "How has ME/CFS symptom severity impacted your ability to perform self care independently?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "mobile": {
            "question": "Are you able to be mobile independently?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-mobile": {
            "question": "How has ME/CFS symptom severity impacted your ability to be mobile independently?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        }
    },
    "habits": {
        "holdjob": {
            "question": "Are you able to hold a job?",
            "rating": "int",
            "rating5": "int",
            "response": "string"
        },
        "mecfs-holdjob": {
            "question": "How has ME/CFS symptom severity impacted your ability to hold a job?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "study": {
            "question": "Are you able to study?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-study": {
            "question": "How has ME/CFS symptom severity impacted your ability to study?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "social": {
            "question": "Are you able to engage in social activities?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-social": {
            "question": "How has ME/CFS symptom severity impacted your ability to engage in social activities?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "cardio": {
            "question": "Are you able to engage in cardiovascular activities? (e.g. running, walking briskly)",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-cardio": {
            "question": "How has ME/CFS symptom severity impacted your ability to engage in cardiovascular activities?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "bend": {
            "question": "Are you able to  bend, kneel or stoop?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-bend": {
            "question": "How has ME/CFS symptom severity impacted your ability to bend, kneel or stoop?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        }
    },
    "routine": {
        "sleep ": {
            "question": "Are you able to sleep?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-sleep": {
            "question": "How has ME/CFS symptom severity impacted your ability to sleep ?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "mecfs-restful": {
            "question": "How would you rate your sleep quality?",
            "rating": "int",
            "rating7": "int",
            "response": "string"
        },
        " concentrate": {
            "question": "Are you able to concentrate on a task?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "temperature": {
            "question": "Are you Are you sensitive to temperature changes?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-concentrate": {
            "question": "How has ME/CFS symptom severity impacted your ability to concentrate on a task?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "house-b": {
            "question": "Are you able to leave the house?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-house-b": {
            "question": "How has ME/CFS symptom severity impacted your ability to leave the house?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "chores": {
            "question": "Are you able to do house-hold chores? (e.g. cooking, cleaning)",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-chores": {
            "question": "How has ME/CFS symptom severity impacted your ability to do house-hold chores?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "bathe": {
            "question": "Are you able to shower/bathe independently?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-bathe": {
            "question": "How has ME/CFS symptom severity impacted your ability to shower/bathe independently?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        }
    },
    "health": {
        "teeth ": {
            "question": "Are you able to brush your teeth independently?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-teeth": {
            "question": "How has ME/CFS symptom severity impacted your ability to brush your teeth independently?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        " bathroom": {
            "question": "Are you able to use the bathroom independently?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-bathroom": {
            "question": "How has ME/CFS symptom severity impacted your ability to use the bathroom independently?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "dressed": {
            "question": "Are you able to get dressed independently?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-dressed": {
            "question": "How has ME/CFS symptom severity impacted your ability to get dressed independently?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "bedbound": {
            "question": "Are you able to leave the bed?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-bedbound": {
            "question": "How has ME/CFS symptom severity impacted your ability to leave the bed?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "mecfs-bedmove": {
            "question": "If you are bed bound, are you able to move in bed?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "mecfs-bedwork": {
            "question": "If you are bed bound, are you able to work on crafts while in bed?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "music": {
            "question": "Are you able to  listen to music?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-music": {
            "question": "How has ME/CFS symptom severity impacted your ability to  listen to music?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "improvement": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "string"
        }
    },
    "social": {
        "socialmedia": {
            "question": "Are you able to use social media?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-socialmedia": {
            "question": "How has ME/CFS symptom severity impacted your ability to use social media?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "noise": {
            "question": "Are you able to  tolerate noise?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-noise": {
            "question": "How has ME/CFS symptom severity impacted your ability to  tolerate noise?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "presence": {
            "question": "Are you able to be in human presence?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-presence": {
            "question": "How has ME/CFS symptom severity impacted your ability to be in human presence?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "food": {
            "question": "Are you able to tolerate food?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-food": {
            "question": "How has ME/CFS symptom severity impacted your ability to tolerate food?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "fragrance": {
            "question": "Are you able to tolerate fragrance?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-fragrance": {
            "question": "How has ME/CFS symptom severity impacted your ability to tolerate fragrance?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "speak": {
            "question": "Are you able to speak?",
            "rating": "int",
            "rating3": "int",
            "response": "string"
        },
        "mecfs-speak": {
            "question": "How has ME/CFS symptom severity impacted your ability to speak?",
            "rating": "int",
            "rating4": "int",
            "response": "string"
        },
        "improvement": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "string"
        }
    },
    "fatigue": {
        "fatigue-level": {
            "question": "At this moment, How would you rate your fatigue level on scale 0-10?",
            "rating": "int",
            "response": "string"
        },
        "pain-level": {
            "question": "At this moment, How would you rate your pain level on scale 0-10?",
            "rating": "int",
            "response": "string"
        },
        "pem": {
            "question": "At this moment, How would you rate your Post Exertional Malaise (PEM) on scale 0-10?",
            "rating": "int",
            "response": "string"
        },
        "brainfog": {
            "question": "At this moment, How would you rate your brain fog on scale 0-10?",
            "rating": "int",
            "response": "string"
        },
        "pots": {
            "question": "At this moment, How would you rate your Postural Orthostatic Tachycardia Syndrome (POTS) on scale 0-10?",
            "rating": "int",
            "response": "string"
        },
        "gi-issues": {
            "question": "At this moment, How would you rate your GI issues on scale 0-10?",
            "rating": "int",
            "response": "string"
        },
        "improvement": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "string"
        }
    },
    "feedback": {
        "improvement": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "string"
        },
        "test": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "string"
        }
    }
};

const schema = {
    "profile": {
        "username": "string",
        "timestamp": "string"
    },
    "ability": {
        "mobility": {
            "question": "How would I describe the difficulty for myself to move around the house? Do I plan my next movement carefully as it is an event or is it something I do not even think about?",
            "rating": "int",
            "response": "Type something ..."
        },
        "social-public": {
            "question": "How comfortable am I in public? Am I able to go and do my regular routine such as work, hangout with friends, or do hobbies?",
            "rating": "int",
            "response": "Type something ..."
        },
        "part-job-study": {
            "question": "How would I describe the difficulty for myself to hold a part time job or study part time?",
            "rating": "int",
            "response": "Type something ..."
        },
        "full-job-study": {
            "question": "How would I describe the difficulty for myself to hold a full time job or study full time?",
            "rating": "int",
            "response": "Type something ..."
        },
        "leave-bed": {
            "question": "How would I describe the difficulty for myself to leave my bed?",
            "rating": "int",
            "response": "Type something ..."
        }
    },
    "habits": {
        "sleep": {
            "question": "How is my sleep schedule?",
            "rating": "int",
            "response": "Type something ..."
        },
        "eating": {
            "question": "How is my eating schedule?",
            "rating": "int",
            "response": "Type something ..."
        },
        "hydration": {
            "question": "How is my water intake schedule?",
            "rating": "int",
            "response": "Type something ..."
        },
        "receational_drugs": {
            "question": "How is my recreational drug use?",
            "rating": "int",
            "response": "Type something ..."
        },
        "urination": {
            "question": "How is my urination schedule?",
            "rating": "int",
            "response": "Type something ..."
        },
        "grades": {
            "question": "How are my grades?",
            "rating": "int",
            "response": "Type something ..."
        },
        "relationships": {
            "question": "How are my relationsips?",
            "rating": "int",
            "response": "Type something ..."
        },
        "improvement": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "Type something ..."
        }
    },
    "feedback": {
        "improvement": {
            "question": "How do I feel compared to the last time I filled out this form?",
            "rating": "int",
            "response": "Type something ..."
        }
    }
};

export default schemaF
/*
const SaveComponent = () => {
    const [jsonData, setData] = useState(
        {schema}
        );

        //Copy and return
const updateJsonDataResp = (section, rating, response, alias) => {
    const responseUpdate = {
        jsonData}
        jsonData[section][alias][rating] = rating;
        jsonData[section][alias][response] = response;
}
    ;

const updateJsonDataFeed = (response) => {
        const responseUpdate = {
            jsonData}
            jsonData["feedback"]["response"] = response;  
        };

setData(responseUpdate);
    };


const handleSubmit = (event) => {}

//when filing out values from the form they should just be inserted in the 
//format is given above


export default SaveComponent */