import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { Vote } from './instructions';
export declare const withCastVote: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, governance: PublicKey, proposal: PublicKey, proposalOwnerRecord: PublicKey, tokenOwnerRecord: PublicKey, governanceAuthority: PublicKey, governingTokenMint: PublicKey, vote: Vote, payer: PublicKey, voterWeightRecord?: PublicKey | undefined, maxVoterWeightRecord?: PublicKey | undefined, proposalName: PublicKey,  programName: PublicKey| undefined) => Promise<PublicKey>;
//# sourceMappingURL=withCastVote.d.ts.map
