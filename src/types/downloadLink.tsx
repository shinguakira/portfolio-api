export type DownLoadLink = {
  href: string; // link to the page
  target?: string; // target for the link Optional

  download?: boolean; // flag if download is true Optional
  label: string; // label for the link
};
