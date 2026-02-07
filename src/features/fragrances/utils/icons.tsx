import { FragranceTraitTypeEnum } from '@/generated/graphql'
import GenderSvg from '../components/GenderSvg'
import LongevitySvg from '../components/LongevitySvg'
import ProjectionSvg from '../components/ProjectionSvg'
import BalanceSvg from '../components/BalanceSvg'
import ComplexitySvg from '../components/ComplexitySvg'
import AppealSvg from '../components/AppealSvg'
import TimeSvg from '../components/TimeSvg'
import SeasonSvg from '../components/SeasonSvg'

export const getTraitIcon = (traitType: FragranceTraitTypeEnum) => {
  const iconProps = {
    className: 'size-6 md:size-auto'
  }

  switch (traitType) {
    case FragranceTraitTypeEnum.Gender:
      return (
        <GenderSvg
          {...iconProps}
        />
      )

    case FragranceTraitTypeEnum.Time:
      return (
        <TimeSvg
          {...iconProps}
        />
      )

    case FragranceTraitTypeEnum.Season:
      return (
        <SeasonSvg
          {...iconProps}
          className='size-6 md:size-8'
        />
      )

    case FragranceTraitTypeEnum.Longevity:
      return (
        <LongevitySvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )

    case FragranceTraitTypeEnum.Projection:
      return (
        <ProjectionSvg
          {...iconProps}
        />
      )

    case FragranceTraitTypeEnum.Balance:
      return (
        <BalanceSvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )

    case FragranceTraitTypeEnum.Complexity:
      return (
        <ComplexitySvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )

    case FragranceTraitTypeEnum.Appeal:
      return (
        <AppealSvg
          {...iconProps}
          className='size-5 md:size-7'
        />
      )
  }
}