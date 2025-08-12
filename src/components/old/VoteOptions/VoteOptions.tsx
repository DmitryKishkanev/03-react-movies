// import type { VoteType } from '@/types/movie';
// import { Container, Button } from 'components/VoteOptions/VoteOptions.styled';

// interface VoteOptionsProps {
//   onVote: (type: VoteType) => void;
//   onReset: () => void;
//   canReset: boolean;
// }

// export default function VoteOptions({
//   onVote,
//   onReset,
//   canReset,
// }: VoteOptionsProps) {
//   return (
//     <Container>
//       <Button onClick={() => onVote('good')}>Good</Button>
//       <Button onClick={() => onVote('neutral')}>Neutral</Button>
//       <Button onClick={() => onVote('bad')}>Bad</Button>
//       {canReset && (
//         <Button onClick={() => onReset()} variant="reset">
//           Reset
//         </Button>
//       )}
//     </Container>
//   );
// }
