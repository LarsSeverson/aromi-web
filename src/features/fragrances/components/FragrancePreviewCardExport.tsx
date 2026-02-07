import React from 'react'
import { useFragranceContext } from '../contexts/FragranceContext'
import { useFragranceAccords } from '../hooks/useFragranceAccords'
import { useFragranceNotes } from '../hooks/useFragranceNotes'
import { NoteLayer } from '@/generated/graphql'
import LogoSvg from '@/components/LogoSvg'

export interface FragrancePreviewCardExportProps {}

export const FragrancePreviewCardExport = React.forwardRef(() => {
  const { fragrance } = useFragranceContext()
  const { thumbnail } = fragrance

  const { accords } = useFragranceAccords(
    fragrance.id,
    {
      first: 6
    }
  )

  const { notes: topNotes } = useFragranceNotes(
    fragrance.id,
    {
      layer: NoteLayer.Top
    }
  )

  const { notes: middleNotes } = useFragranceNotes(
    fragrance.id,
    {
      layer: NoteLayer.Middle
    }
  )

  const { notes: baseNotes } = useFragranceNotes(
    fragrance.id,
    {
      layer: NoteLayer.Base
    }
  )

  const maxAccordVote = accords.at(0)?.votes.score ?? 0

  const allNotesDisplayed = React.useMemo(
    () => {
      const combined = [
        ...topNotes,
        ...middleNotes,
        ...baseNotes
      ]

      const prioritized = [
        ...topNotes.slice(0, 3),
        ...middleNotes.slice(0, 2),
        ...baseNotes.slice(0, 1)
      ]

      if (prioritized.length >= 6) {
        return prioritized.slice(0, 6)
      }

      const seenIds = new Set(prioritized.map((n) => n.id))
      const remaining = combined.filter((n) => !seenIds.has(n.id))

      return [...prioritized, ...remaining].slice(0, 6)
    },
    [
      topNotes,
      middleNotes,
      baseNotes
    ]
  )

  const bgColor = thumbnail?.primaryColor ?? '#FFFFFF'

  const getAccordWidth = (votes: number) => {
    return (votes / maxAccordVote) * 100
  }

  return (
    <div
      className="fixed top-10 left-100 z-100 overflow-hidden rounded-2xl bg-white"
      style={{
        width: '400px',
        height: '533px'
      }}
    >
      <div
        className="absolute inset-0 backdrop-blur-3xl"
        style={{
          backgroundColor: `${bgColor}08`
        }}
      />

      <div
        className="absolute inset-0 flex h-full w-full flex-col items-center gap-3 p-3 px-5"
      >
        <div
          className="shadow-symmetrical flex-1 overflow-hidden rounded-2xl"
        >
          <img
            src={thumbnail?.url ?? ''}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="flex h-full w-full flex-2 flex-col overflow-hidden text-center"
        >
          <h2
            className="text-xl font-semibold"
          >
            {fragrance.name}
          </h2>

          <h5
            className="text-md font-medium"
          >
            {fragrance.brand.name}
          </h5>

          <div
            className="mt-3 flex h-full w-full gap-6"
          >
            <div
              className="flex h-full flex-1 flex-col gap-1 text-start"
            >
              <span
                className="text-md mb-1 font-semibold"
              >
                Accords
              </span>

              {accords.map((accord) => (
                <div
                  key={accord.id}
                  className="my-0.5 flex flex-col gap-1"
                >
                  <div
                    className="h-3 w-full overflow-hidden rounded-full"
                    style={{
                      backgroundColor: accord.accord.color,
                      width: `${getAccordWidth(accord.votes.score)}%`
                    }}
                  />

                  <span
                    className="ml-2 text-xs leading-tight"
                  >
                    {accord.accord.name}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex flex-1 flex-col gap-1 text-start"
            >
              <span
                className="text-md mb-1 font-semibold"
              >
                Notes
              </span>

              <div
                className="grid grid-flow-col grid-rows-2 gap-x-2 gap-y-3"
              >
                {allNotesDisplayed.map((note) => (
                  <div
                    key={note.id}
                    className="flex min-w-max flex-col items-center"
                  >
                    <img
                      src={note.note.thumbnail?.url ?? ''}
                      className={`
                        h-12
                        w-12
                        shrink-0
                        overflow-hidden
                        rounded-full
                        border
                      `}
                    />

                    <span
                      className={`
                        mt-1
                        w-full
                        text-center
                        text-xs
                        leading-tight
                      `}
                    >
                      {note.note.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='absolute right-3 bottom-3 flex'
      >
        <LogoSvg
          width={25}
          height={25}
        />

        <span
          className='mb-0.5 ml-1 self-end text-sm font-semibold text-black'
        >
          aromi
        </span>
      </div>
    </div>
  )
})