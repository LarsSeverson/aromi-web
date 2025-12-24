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
    className: 'size-7 md:size-auto'
  }

  switch (traitType) {
    case TraitTypeEnum.Gender:
      return (
        <GenderSvg
          {...iconProps}
          width={30}
          height={30}
        />
      )

    case TraitTypeEnum.Time:
      return (
        <TimeSvg
          {...iconProps}
          width={28}
          height={28}
        />
      )

    case TraitTypeEnum.Season:
      return (
        <div className="size-8 md:size-auto">
          <SeasonSvg />
        </div>
      )

    case TraitTypeEnum.Longevity:
      return (
        <LongevitySvg
          {...iconProps}
          width={23}
          height={23}
        />
      )

    case TraitTypeEnum.Projection:
      return (
        <ProjectionSvg
          {...iconProps}
          width={25}
          height={25}
        />
      )

    case TraitTypeEnum.Balance:
      return (
        <BalanceSvg
          {...iconProps}
          width={22}
          height={22}
        />
      )

    case TraitTypeEnum.Complexity:
      return (
        <ComplexitySvg
          {...iconProps}
          width={23}
          height={23}
        />
      )

    case TraitTypeEnum.Appeal:
      return (
        <AppealSvg
          {...iconProps}
          width={24}
          height={24}
        />
      )
  }
}