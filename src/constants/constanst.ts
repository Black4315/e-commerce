
import CategoryCameraIcon from "@/assets/icons/CategoryCamera";
import CategoryCellPhoneIcon from "@/assets/icons/CategoryCellPhone";
import CategoryComputerIcon from "@/assets/icons/CategoryComputer";
import CategoryGamepadIcon from "@/assets/icons/CategoryGamepad";
import CategoryHeadphoneIcon from "@/assets/icons/CategoryHeadphone";
import CategorySmartWatchIcon from "@/assets/icons/CategorySmartWatch";
import IconcancelIcon from "@/assets/icons/Iconcancel";
import IconFacebookIcon from "@/assets/icons/IconFacebook";
import IconinstagramIcon from "@/assets/icons/iconinstagram";
import IconLinkedin1Icon from "@/assets/icons/IconLinkedin1";
import IconlogoutIcon from "@/assets/icons/Iconlogout";
import IconmallbagIcon from "@/assets/icons/iconmallbag";
import IconReviewsIcon from "@/assets/icons/IconReviews";
import IconTwitter1Icon from "@/assets/icons/IconTwitter1";
import UserIcon from "@/assets/icons/user";

export const profileMenuIcons = [
    UserIcon,
    IconmallbagIcon,
    IconcancelIcon,
    IconReviewsIcon,
    IconlogoutIcon
]

export const socialMedia = [
    {
        Icon: IconFacebookIcon,
        link: '#'
    },
    {
        Icon: IconTwitter1Icon,
        link: '#'
    },
    {
        Icon: IconinstagramIcon,
        link: '#'
    },
    {
        Icon: IconLinkedin1Icon,
        link: '#'
    }
]

export const downloads = [
    {
        img: '/assets/images/GooglePlay.svg',
        alt:'google play',
        link: '#'  
    },
    {
        img: '/assets/images/AppStore.svg',
        alt:'apple store',
        link: '#'
    },
]

export const browse_categories = [
    {
        id: 1,
        name: "Phones",
        slug: "phones",
        icon:CategoryCellPhoneIcon ,
    },
    {
        id: 2,
        name: "Computers",
        slug: "computers",
        icon: CategoryComputerIcon,

    },
    {
        id: 3,
        name: "SmartWatch",
        slug: "smartwatch",
        icon: CategorySmartWatchIcon,
    },
    {
        id: 4,
        name: "Camera",
        slug: "camera",
        icon: CategoryCameraIcon,
    },
    {
        id: 5,
        name: "HeadPhones",
        slug: "headphones",
        icon: CategoryHeadphoneIcon,

    },
    {
        id: 6,
        name: "Gaming",
        slug: "gaming",
        icon: CategoryGamepadIcon,

    },
];
