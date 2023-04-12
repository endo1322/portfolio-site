export type Page = {
  id: string
  archived: boolean
  //   cover: null
  //   icon: null
  created_by: {
    object: string
    id: string
  }
  created_time: string
  last_edited_by: {
    object: string
    id: string
  }
  last_edited_time: string
  object: string
  parent: {
    type: string
    database_id: string
  }
  properties: {
    title: {
      id: string
      type: string
      title: Array<RichText>
    }
    tag: {
      id: string
      type: string
      //   multi_select: Array
    }
  }
  url: string
}

export type RichText = {
  annotations: {
    bold: boolean
    code: boolean
    color: string
    italic: boolean
    strikethrough: boolean
    underline: boolean
  }
  href: string | null
  plain_text: string
  text?: {
    content: string
    link: string | null
  }
  mention?: {
    page: {
      id: string
    }
    type: string
  }
  type: string
}

export type Block = {
  archived: boolean
  created_by: {
    object: string
    id: string
  }
  created_time: string
  has_children: boolean
  id: string
  last_edited_by: {
    object: string
    id: string
  }
  last_edited_time: string
  object: string
  paragraph?: {
    rich_text: Array<RichText>
    color: string
  }
  heading_1?: {
    rich_text: Array<RichText>
    color: string
    is_toggleable: boolean
  }
  heading_2?: {
    rich_text: Array<RichText>
    color: string
    is_toggleable: boolean
  }
  bulleted_list_item?: {
    rich_text: Array<RichText>
    color: string
  }
  parent: {
    type: string
    page_id: string
  }
  type: string
}

export type postPage = {
  parent: {
    type: string
    database_id: string
  }
  properties: {
    name?: {
      title: [
        {
          text: {
            content: string
          }
        }
      ]
    }
    email?: {
      email: string
    }
    select?: {
      select: {
        name: string
      }
    }
    content?: {
      rich_text: [
        {
          text: {
            content: string
          }
        }
      ]
    }
  }
}
