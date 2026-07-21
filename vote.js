const age = 10;

const hasVoterIdCard = true;

const message = 
age >= 18 && hasVoterIdCard === true
? "You are eligible to vote." 
: "You are not eligible to vote.";


const finalMessage = 
age >= 18 ? (hasVoterIdCard ? "Vote for the candidate of your choice." : "Get your voter ID card to vote in the next election. ") : "You are not eligible to vote yet. Please wait until you reach the voting age.";

console.log(message);
console.log(finalMessage);

const isEligibleToVote = age >= 18 || hasVoterIdCard != false;
if (isEligibleToVote) {
    const votingMessage = 
    hasVoterIdCard 
    ? "You can cast your vote." 
    : "Please obtain your voter ID card to vote.";
    const finalVotingMessage = 
    age >= 18 
    ? votingMessage 
    : "You are not eligible to vote yet. Please wait until you reach the voting age.";
    console.log(finalVotingMessage);
}