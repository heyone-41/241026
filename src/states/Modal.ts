import { atom } from "recoil";

export const MorePhotoData = atom<boolean>({
  key: "MorePhotoData",
  default: false,
});

export const ContactModalType = atom<string>({
  key: "ContactModalType",
  default: "",
});
