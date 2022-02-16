import * as beet from '@metaplex-foundation/beet';
export enum WhitelistMintMode {
  BurnEveryTime,
  NeverBurn,
}
export const whitelistMintModeEnum = beet.fixedScalarEnum(WhitelistMintMode) as beet.FixedSizeBeet<
  WhitelistMintMode,
  WhitelistMintMode
>;
