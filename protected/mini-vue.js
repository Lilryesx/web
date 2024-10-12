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
                    date: '10/2/2024',
                    time: '6:10PM - 7:10PM',
                    attendance: "Grant Bossio, Ryon Baldwin-Williams, Troy Williams, Ben Grycza, Sawyer Vandyke",
                    agenda: [
                        "Touch Base on Progress",
                        "Go over requirements as a team",
                        "Determine what requirements need to be added and/or removed",
                        "Go over questions as a team",
                        "Determine what questions need to be revised",
                        "Determine what questions we want to ask as a team",
                        "Add questions if necessary",
                        "Remove questions if necessary",
                        "Cover Demonstration Requirements For Future Reference",
                    ] 
                },
                {
                    date: '',
                    time: '',
                    attendance: '',
                    agenda: [
                        
                    ] 
                }
                     
            ]
        };
        
    }
}).mount("#meetings-collapse");