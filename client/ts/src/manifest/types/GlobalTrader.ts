/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
export type GlobalTrader = {
  trader: web3.PublicKey;
  unclaimedGasDeposits: number;
  depositIndex: number;
  padding: beet.bignum;
};

/**
 * @category userTypes
 * @category generated
 */
export const globalTraderBeet = new beet.BeetArgsStruct<GlobalTrader>(
  [
    ['trader', beetSolana.publicKey],
    ['unclaimedGasDeposits', beet.u32],
    ['depositIndex', beet.u32],
    ['padding', beet.u64],
  ],
  'GlobalTrader',
);
