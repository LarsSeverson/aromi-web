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
  switch (traitType) {
    case TraitTypeEnum.Gender:
      return (
        <GenderSvg
          width={30}
          height={30}
        />
      )

    case TraitTypeEnum.Time:
      return (
        <TimeSvg
          width={28}
          height={28}
        />
      )

    case TraitTypeEnum.Season:
      return (
        <SeasonSvg />
      )

    case TraitTypeEnum.Longevity:
      return (
        <LongevitySvg
          width={23}
          height={23}
        />
      )

    case TraitTypeEnum.Projection:
      return (
        <ProjectionSvg
          width={25}
          height={25}
        />
      )

    case TraitTypeEnum.Balance:
      return (
        <BalanceSvg
          width={22}
          height={22}
        />
      )

    case TraitTypeEnum.Complexity:
      return (
        <ComplexitySvg
          width={23}
          height={23}
        />
      )

    case TraitTypeEnum.Appeal:
      return (
        <AppealSvg
          width={24}
          height={24}
        />
      )
  }
}
