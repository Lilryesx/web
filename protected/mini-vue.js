Vue.createApp({
    template: 
    `
    <div v-for="meeting in meetings" class="meetings">
        <div class="collapsible">
            <input type="checkbox" :id=meeting.date>
            <label :for=meeting.date>Meeting Notes: {{meeting.date}} <img class="im" src="../other/carrot.png"> </label>
            <div class="collapsible-content">
              <h3>Meeting Time: {{meeting.time}}</h2>
              <h4>Attendance:</h1>
              <p>
                {{meeting.attendance}}
              </p>
              <h4>Agenda:</h1>
              <ul v-for="item in meeting.agenda">
              <li>
                {{item}}
              </li>
              </ul>
              
            </div>
        </div>
    </div>
    
    `,
    data(){
        return {
            meetings: [
                {
                    date: '10/1/2024',
                    time: '30 min',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke",
                    agenda: [
                        "exchanged initial greetings",
                        "reviewed project assignment",
                        "reviewed project description",
                    ] 
                },
                {
                    date: '10/02/2024',
                    time: '1 hr 22 min',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke",
                    agenda: [
                        "Touch Base on Progress",
                        "Go over requirements & questions as a team",
                        "Determine what requirements & questions need to be added and/or removed",
                        "Determine what requirements & questions need to be revised",
                    ] 
                },
                {
                    date: '10/04/2024',
                    time: '20 min',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Sawyer Vandyke, Ben Grycza",
                    agenda: [
                        "Review Completed Requirements",
                        "Discuss Feedback from Client",
                        "Prepare a List of Deliverables for Next Phase"
                    ]
                },
                {
                    date: '10/11/2024',
                    time: '1 hr',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Sawyer Vandyke, Ben Grycza",
                    agenda: [
                        "discusss meeting with customer",
                        "review the meeting",
                        "assign tasks for refining list of requirements"
                    ]
                },
                {
                    date: '10/12/2024',
                    time: '20 mins',
                    attendance: "Grant Bossio, Sawyer Vandyke, Ben Grycza",
                    agenda: [
                        "Update on progress",
                    ]
                },
                {
                    date: '10/22/2024',
                    time: '20 mins',
                    attendance: "Ryon Baldwin-Wiliams, Sawyer Vandyke, Troy Williams",
                    agenda: [
                        "Update on progress",
                        "working session",
                    ]
                },
                {
                    date: '10/30/2024',
                    time: '1 hr',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke",
                    agenda: [
                        "Update on progress",
                        "working session",
                    ]
                },
                {
                    date: '11/02/2024',
                    time: '30 min',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams",
                    agenda: [
                       "finalized requirements for SRS V0",
                       "Delegate tasks for building the Prototype"
                    ]
                },
                {
                    date: '11/04/2024',
                    time: '20 min',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams",
                    agenda: [
                       "minor tweaks prior to submitting SRS V0",
                    ]
                },
                {
                    date: '11/10/2024',
                    time: '40 min',
                    attendance: "Grant Bossio, Sawyer Vandyke, Ben Grycza",
                    agenda: [
                        "Delegate tasks for finalizing the SRS V1 document",
                    ]
                },
                {
                    date: '11/11/2024',
                    time: '40 min',
                    attendance: "Grant Bossio, Sawyer Vandyke, Ben Grycza",
                    agenda: [
                        "Submit SRS V1",
                        "Review the document prior to submitting"
                    ]
                },
                {
                    date: '11/18/2024',
                    time: '57 min',
                    attendance: 'Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke, Collin Heavner',
                    agenda: [
                        "Touch Base on Progress",
                        "Review The SRS Inspection as a Team",
                        "Discuss what needs to be improved on for future version",
                        "Discuss what needs to be fixed on the prototype",
                        "Discuss how we want to format the document for a more coherent reading experience",
                        "Discuss how we want to correct typos and grammatical mistakes",
                        "Create Assignments for Deliverables on next iteration"
                    ] 
                },
                {
                    date: '11/22/2024',
                    time: '30 min',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke, Collin Heavner",
                    agenda: [
                        "Delegate tasks for finalizing the SRS V2 document",
                        
                    ]
                },
                {
                    date: '11/27/2024',
                    time: '1 hr',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke, Collin Heavner",
                    agenda: [
                        "Delegate tasks for the presentaion",
                        "Start on intial template and formatting of the slides",
                        "Decide on which diagram/model to present"
                    ]
                },
                {
                    date: '12/02/2024',
                    time: '2 hr',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke, Collin Heavner",
                    agenda: [
                        "Prepare final presentaion",
                        "Practice presentaion and timing",
                        "Submit presentaion"
                    ]
                }
            ]
            
        };
        
    }
}).mount("#meetings-collapse");



Vue.createApp({
    template: 
    `
    <div v-for="thread in threads" class="meetings">
        <div class="collapsible">
            <input type="checkbox" :id=thread.title>
            <label :for=thread.title>{{thread.title}} <img class="im" src="../other/carrot.png"> </label>
            <div class="collapsible-content">
              <img class="thread-image" :src=thread.img draggable="false" />
              
            </div>
        </div>
    </div>
    
    `,
    data(){
        return {
            threads: [
                
                {
                    title: 'Collaboaration and Clarification',
                    img: "../other/threads/thread-1.png"
                },
                {
                    title: 'System Design',
                    img: "../other/threads/thread-2.png"
                },
                {
                    title: 'New Member',
                    img: "../other/threads/thread-3.png"
                },
                {
                    title: 'Delegating Tasks',
                    img: "../other/threads/thread-4.png"
                },
                {
                    title: 'General Conversation',
                    img: "../other/threads/thread-5.png"
                }
            ]
            
        };
        
    }
}).mount("#threads-collapse");



Vue.createApp({
    template: 
    `
    <div v-for="log in dialogs" class="meetings">
        <div class="collapsible">
            <input type="checkbox" :id=log.title>
            <label :for=log.title> Dialog with customers: {{log.title}} <img class="im" src="../other/carrot.png"> </label>
            <div class="collapsible-content">
              <img class="thread-image" :src=log.img draggable="false" />
              
            </div>
        </div>
    </div>
    
    `,
    data(){
        return {
            dialogs: [
                {
                    title: 'Follow up with Client',
                    img: "../other/image.png"
                }
            ]
            
        };
        
    }
}).mount("#dialog-collapse");


Vue.createApp({
    template: 
    `
    <div v-for="draft in drafts">
        <a id="QnA" target="_blank"  :href=draft.pdf> {{draft.title}}</a> 
    </div>
    `,
    data(){
        return {
            drafts: [
                {
                    title: 'Collated requirements list - Oct 2nd',
                    pdf: "../other/intermediate/req1.docx"
                },
                {
                    title: 'Collated requirements list V2- Oct 4th',
                    pdf: "../other/intermediate/req2.docx"
                },
                {
                    title: 'Summary of Customer Meeting - Oct 11th',
                    pdf: "../other/intermediate/reqmeet.pdf"
                },
                {
                    title: 'SRS V1 - Nov 11th',
                    pdf: "../other/intermediate/srs0.pdf"
                },
                {
                    title: 'Intermediate State Diagrams - Nov 13th',
                    pdf: "../other/intermediate/State Diagrams.pdf"
                },
                {
                    title: 'Inspection Summary - Nov 15th',
                    pdf: "../other/intermediate/CSE 435 SRS Review Summary.pdf"
                },
                {
                    title: 'SRS V2 - Nov 22nd',
                    pdf: "../other/documents/SRS-2.pdf"
                },
                {
                    title: 'Presentation - Dec 2nd',
                    pdf: "../other/documents/Presention.pdf"
                },
            ]
            
        };
        
    }
}).mount("#inter-holder");
