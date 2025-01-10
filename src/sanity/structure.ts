import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Elvebrus')
    .items([
      S.documentTypeListItem('ticket').title('Biletter'),
      S.documentTypeListItem('lineup').title('Lineup'),
      S.documentTypeListItem('artistProfile').title('Artister'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['ticket', 'lineup', 'artistProfile'].includes(item.getId()!),
      ),
    ])
