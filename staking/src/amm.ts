import {
  LiquidityProvided as LiquidityProvidedEvent,
  LiquidityRemoved as LiquidityRemovedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Swapped as SwappedEvent,
} from "../generated/amm/amm"
import {
  LiquidityProvided,
  LiquidityRemoved,
  OwnershipTransferred,
  Swapped,
} from "../generated/schema"

export function handleLiquidityProvided(event: LiquidityProvidedEvent): void {
  let entity = new LiquidityProvided(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.provider = event.params.provider
  entity.amount1 = event.params.amount1
  entity.amount2 = event.params.amount2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityRemoved(event: LiquidityRemovedEvent): void {
  let entity = new LiquidityRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.provider = event.params.provider
  entity.amount1 = event.params.amount1
  entity.amount2 = event.params.amount2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapped(event: SwappedEvent): void {
  let entity = new Swapped(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.swapper = event.params.swapper
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
