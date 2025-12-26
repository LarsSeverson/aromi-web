import { TraitTypeEnum } from '@/generated/graphql'
import GenderSvg from '../components/GenderSvg'
import LongevitySvg from '../components/LongevitySvg'
import ProjectionSvg from '../components/ProjectionSvg'
import BalanceSvg from '../components/BalanceSvg'
import ComplexitySvg from '../components/ComplexitySvg'
import AppealSvg from '../components/AppealSvg'
import TimeSvg from '../components/TimeSvg'
import SeasonSvg from '../components/SeasonSvg'

export const getTraitIcon = (traitType: TraitTypeEnum) => {
  const iconProps = {
    className: 'size-6 md:size-auto'
  }

  switch (traitType) {
    case TraitTypeEnum.Gender:
      return (
        <GenderSvg
          {...iconProps}
        />
      )

    case TraitTypeEnum.Time:
      return (
        <TimeSvg
          {...iconProps}
        />
      )

    case TraitTypeEnum.Season:
      return (
        <SeasonSvg
          {...iconProps}
          className='size-6 md:size-8'
        />
      )

    case TraitTypeEnum.Longevity:
      return (
        <LongevitySvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )

    case TraitTypeEnum.Projection:
      return (
        <ProjectionSvg
          {...iconProps}
        />
      )

    case TraitTypeEnum.Balance:
      return (
        <BalanceSvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )

    case TraitTypeEnum.Complexity:
      return (
        <ComplexitySvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )

    case TraitTypeEnum.Appeal:
      return (
        <AppealSvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )
  }
}