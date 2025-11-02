import { TraitTypeEnum } from '@/generated/graphql'
import GenderSvg from '../components/GenderSvg'
import LongevitySvg from '../components/LongevitySvg'
import ProjectionSvg from '../components/ProjectionSvg'
import BalanceSvg from '../components/BalanceSvg'
import ComplexitySvg from '../components/ComplexitySvg'
import AppealSvg from '../components/AppealSvg'

export const getTraitIcon = (traitType: TraitTypeEnum) => {
  switch (traitType) {
    case TraitTypeEnum.Gender:
      return (
        <GenderSvg
          width={30}
          height={30}
        />
      )

    case TraitTypeEnum.Longevity:
      return (
        <LongevitySvg
          width={21}
          height={21}
        />
      )

    case TraitTypeEnum.Projection:
      return (
        <ProjectionSvg
          width={22}
          height={22}
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
          width={22}
          height={22}
        />
      )

    case TraitTypeEnum.Appeal:
      return (
        <AppealSvg
          width={22}
          height={22}
        />
      )
  }
}
