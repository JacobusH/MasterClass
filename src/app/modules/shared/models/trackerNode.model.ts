export interface TrackerNode {
  key: string,
  userKey: string,
  fields: Array<TrackerNodeField>
}

export interface TrackerNodeField {
  key: string,
  name: string,
  value: any
} 