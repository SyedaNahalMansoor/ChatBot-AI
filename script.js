var chatBox = document.getElementById("chatBox");
var chatDiv = document.getElementById("chatDiv");
var input = document.getElementById("input");
var inputBox = document.getElementById("inputBox");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

function deleteChat() {
    alert("You want to delete the last msg");
    chatDiv.removeChild(chatDiv.lastChild);

}

function sendBtn() {
    var msg = inputBox.value.trim();
    if(msg !== "") {
        var p = document.createElement("p");
        p.className = "user-msg animate__animated animate__fadeInTopRight animate__faster";
        p.textContent = msg;
        chatDiv.appendChild(p);
        chatDiv.scrollTop = chatDiv.scrollHeight;
        inputBox.value = "";

        var loader ;
       setTimeout(() => {
        loader = document.createElement("img");
        loader.src = "loader.gif";
        loader.className = "loader";
        chatDiv.appendChild(loader);
        chatDiv.scrollTop = chatDiv.scrollHeight;
       }, 900);

        setTimeout(() => {
            chatDiv.removeChild(loader);

            var botReply = "";
            var text = msg.toLowerCase();

            if (text.includes("hi") || text.includes("hello")) {
                botReply = "Hey there! What's Up?";
            } else if (text.includes("what is electric warfare?")) {
                botReply = "Electronic warfare (EW) is the use of electromagnetic energy—like radio waves, radar, or signals—to attack, defend, or spy in a battlefield. It targets enemy communication, navigation, or detection systems without using physical weapons.";
            } else if (text.includes("how does electric warfare work?")) {
                botReply = "Electronic warfare works by detecting, disrupting, or deceiving enemy electronic signals. It uses special equipment to jam radios, confuse radar, or intercept secret messages—making it harder for the enemy to communicate or detect targets.";
            } else if (text.includes("what types of electric warfare exist?")) {
                botReply = "There are three main types of electronic warfare: Electronic Attack (EA), Electronic Protection (EP), and Electronic Support (ES). Each focuses on attacking, defending, or gathering information using electronic means.";
            } else if (text.includes("how is jamming used in electric warfare?")) {
                botReply = "Jamming is used to block or interfere with enemy signals, like radio or radar. It floods the signal with noise so the enemy can’t communicate, detect aircraft, or use guided weapons properly.";
            } else if (text.includes("can electric warfare damage real weapons?")) {
                botReply = "Yes, some advanced electronic attacks can damage real weapons by overheating circuits, frying sensors, or making them     malfunction—especially those controlled by electronics or GPS.";
            } else if (text.includes("what is the role of satellites in electric warfare?")) {
                botReply = "Satellites help detect, track, and sometimes jam enemy signals. They play a major role in global surveillance and coordination in electronic warfare operations.";
            } else if (text.includes("is electric warfare used in cyber attacks?")) {
                botReply = "Electronic warfare and cyber attacks are different, but they can support each other. EW targets physical signals, while cyber attacks target networks and data—but both can be used together in modern warfare.";
            } else if (text.includes("how do armies defend against electric warfare?")) {
                botReply = "Armies defend against EW by using shielded equipment, frequency hopping, anti-jamming tech, and backups like optical or wired communication to avoid total signal loss.";
            } else if (text.includes("Which countries have strong electric warfare systems?")) {
                botReply = "Countries like the USA, China, Russia, and Israel have strong electronic warfare capabilities, using advanced tech to dominate the electromagnetic spectrum in battles.";
            } else if (text.includes("is electric warfare dangerous for humans?")) {
                botReply = "Usually, it’s not physically dangerous to humans unless high-power microwaves or other strong radiation is used. Most EW targets machines, not people.";
            } else if (text.includes("how does radar play a role in electric warfare?")) {
                botReply = "Radar is both a target and a tool in EW. EW can jam or deceive radar, while also using radar to track enemy activities and defend against incoming threats.";
            } else if (text.includes("what's the difference between electronic and cyber warfare?")) {
                botReply = "Electronic warfare targets signals and electromagnetic energy (like jamming radios or radars), while cyber warfare targets computer networks and data (like hacking or viruses).";
            } else if (text.includes("can electric warfare stop drones or missiles?")) {
                botReply = "Yes, EW can stop drones or missiles by jamming their GPS or communication links, confusing their sensors, or even taking control of them with advanced techniques.";
            } else if (text.includes("what are real-life examples of electric warfare?")) {
                botReply = "Examples include the U.S. using EA-18G Growler jets to jam enemy radars, or Russia using EW in Ukraine to block drones and GPS-guided weapons.";
            } else if (text.includes("will electric warfare be common in future wars?")) {
                botReply = "Yes, EW will be very common in future wars as armies rely more on technology. Controlling the electromagnetic spectrum will be as important as land, air, and sea.";
            } else if (text.includes("ok") || text.includes("bye") || text.includes("thk h")) {
                botReply = "Bye Take Care 😊"
            } else {
                botReply = "I dont know what you are talking about ☹️";
            }

            var bot = document.createElement("p");
            bot.className = "bot-msg animate__animated animate__fadeInTopLeft animate__faster";
            bot.textContent = "🤖" + botReply;
            chatDiv.appendChild(bot);
            chatDiv.scrollTop = chatDiv.scrollHeight;
        }, 4000);
    }
}
