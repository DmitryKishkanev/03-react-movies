import { useState } from 'react';

export default function App() {
  // const [votes, setVotes] = useState<Votes>({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  // const handleVote = (type: VoteType) => {
  //   setVotes(prevVotes => ({
  //     ...prevVotes,
  //     [type]: prevVotes[type] + 1,
  //   }));
  // };
  // const resetVotes = () => {
  //   setVotes({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };
  // const varTotalVotes = votes.good + votes.neutral + votes.bad;
  // const varPositiveRate = varTotalVotes
  //   ? Math.round((votes.good / varTotalVotes) * 100)
  //   : 0;
  // return (
  //   <Container>
  //     <CafeInfo
  //       title="Sip Happens Café"
  //       description=" Please rate our service by selecting one of the options below."
  //     />
  //     <VoteOptions
  //       onVote={handleVote}
  //       onReset={resetVotes}
  //       canReset={!!varTotalVotes}
  //     />
  //     {varTotalVotes ? (
  //       <VoteStats
  //         votes={votes}
  //         totalVotes={varTotalVotes}
  //         positiveRate={varPositiveRate}
  //       />
  //     ) : (
  //       <Notification />
  //     )}
  //   </Container>
  // );
}
