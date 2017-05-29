export interface PaginationInfo {
    total: number;
    limit: number;
    startOffset: number;
}

export interface Birthday {
    nanos: number;
    time: any;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface UserList {
    streetAddress: string;
    birthday: Birthday;
    userGroupList: any[];
    userFavoriteGroupList: any[];
    department: string;
    blog: string;
    avatarFilename: string;
    city: string;
    instantMessenger: string;
    diskQuotaLimit: number;
    postalCode: string;
    interest: string;
    contentList: any[];
    gender: number;
    firstName: string;
    internal: boolean;
    office: string;
    enabled: boolean;
    lastName: string;
    mail: string;
    objectGUIDString: string;
    skillTagListXML: string;
    fax: string;
    nickname: string;
    userFavoriteListXML: string;
    jabberMessenger: string;
    skillTagList: any[];
    country: string;
    userID: string;
    permalink: string;
    company: string;
    telephoneNumber: string;
    contentListXML: number;
    idAxapta: string;
    tagListXML: string;
    birthdayYearHide: boolean;
    policyJoinDate?: any;
    tagList: any[];
    userFavoriteList: any[];
    msnMessenger: string;
    mobile: string;
}

export interface Birthday2 {
    nanos: number;
    time: number;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface Author {
    streetAddress: string;
    birthday: Birthday2;
    userGroupList: any[];
    userFavoriteGroupList: any[];
    department: string;
    blog: string;
    avatarFilename: string;
    city: string;
    instantMessenger: string;
    diskQuotaLimit: number;
    postalCode: string;
    interest: string;
    contentList: any[];
    gender: number;
    firstName: string;
    internal: boolean;
    office: string;
    enabled: boolean;
    lastName: string;
    mail: string;
    objectGUIDString: string;
    skillTagListXML: string;
    fax: string;
    nickname: string;
    userFavoriteListXML: string;
    jabberMessenger: string;
    skillTagList: any[];
    country: string;
    userID: string;
    permalink: string;
    company: string;
    telephoneNumber: string;
    contentListXML: number;
    idAxapta: string;
    tagListXML: string;
    birthdayYearHide: boolean;
    policyJoinDate?: any;
    tagList: any[];
    userFavoriteList: any[];
    msnMessenger: string;
    mobile: string;
}

export interface Created {
    nanos: number;
    time: any;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface GroupList {
    contentCounter: number;
    eventCoverImageUrl: string;
    users: any[];
    registrationStatus: string;
    eventLogoImageUrl: string;
    usersXML: string;
    eventStartDateStartTime: string;
    eventStartDateEndTime: string;
    eventEndDate: string;
    eventType: string;
    numberOfRegistered: number;
    type: string;
    eventEndDateEndTime: string;
    eventWidgetRegistrationMaxSeats: string;
    network: string;
    creator: string;
    id: number;
    created: Created;
    description: string;
    name: string;
    eventCity: string;
    userCounter: number;
    eventWidgetRegistrationEndDate: string;
    namePermalink: string;
    eventLocation: string;
    contents: any[];
    contentsXML: number;
    sphereTag: string[];
    eventStartDate: string;
    speakerList: any[];
    eventWidgetRegistrationStartDate: string;
    sphereTagMatchingUserTag: any[];
    eventLocationPermalink: string;
    administrators: any[];
    daysLeft: number;
    eventEndDateStartTime: string;
    eventCountry: string;
    groupLink: string;
    contentSphereTag: string[];
}

export interface CreationDate {
    nanos: number;
    time: any;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface CommentsList {
    id: number;
    creationDate: CreationDate;
    userObjectGUIDString: string;
    commentPlainText: string;
    rate: number;
    replyTo: number;
    permalink: string;
    userAvatarUrl: string;
    userFullName: string;
    comment: string;
    user: string;
    contentId: number;
}

export interface LinkList {
    id: number;
    linkDomain: string;
    thumbnailOriginal: string;
    linkDescription: string;
    thumbnailSmall: string;
    thumbnailMedium: string;
    linkImageUrl: string;
    linkTitle: string;
    thumbnailRect: string;
    contentId: number;
    url: string;
}

export interface UpdateDate {
    nanos: number;
    time: any;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface CreationDate2 {
    nanos: number;
    time: any;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface Created2 {
    nanos: number;
    time: any;
    minutes: number;
    seconds: number;
    hours: number;
    month: number;
    timezoneOffset: number;
    year: number;
    day: number;
    date: number;
}

export interface LinkedGroup {
    contentCounter: number;
    eventCoverImageUrl: string;
    users: any[];
    registrationStatus: string;
    eventLogoImageUrl: string;
    usersXML: string;
    eventStartDateStartTime: string;
    eventStartDateEndTime: string;
    eventEndDate: string;
    eventType: string;
    numberOfRegistered: number;
    type: string;
    eventEndDateEndTime: string;
    eventWidgetRegistrationMaxSeats: string;
    network: string;
    creator: string;
    id: number;
    created: Created2;
    description: string;
    name: string;
    eventCity: string;
    userCounter: number;
    eventWidgetRegistrationEndDate: string;
    namePermalink: string;
    eventLocation: string;
    contents: any[];
    contentsXML: number;
    sphereTag: string[];
    eventStartDate: string;
    speakerList: any[];
    eventWidgetRegistrationStartDate: string;
    sphereTagMatchingUserTag: any[];
    eventLocationPermalink: string;
    administrators: any[];
    daysLeft: number;
    eventEndDateStartTime: string;
    eventCountry: string;
    groupLink: string;
    contentSphereTag: string[];
}

export interface EventGroupList {
    id: number;
    linkedGroups: LinkedGroup[];
    nameEvent: string;
}

export interface List {
    commentsEnabled: boolean;
    filesListXML: number;
    thumbnailOriginal: string;
    favouriteCounter: number;
    userList: UserList[];
    eventMetaVideoUrl: string;
    contentType: string;
    thumbnailHuge: string;
    type: string;
    downloads: number;
    permalinkBlogpost: string;
    network: string;
    id: number;
    author: Author;
    title: string;
    groupList: GroupList[];
    rate: number;
    thumbnailSmall: string;
    thumbnailMedium: string;
    description: string;
    contentStatus: number;
    commentsList: CommentsList[];
    linkList: LinkList[];
    rateEnabled: boolean;
    ratesNumber: number;
    numberOfFiles: number;
    numberOfComments: number;
    discussionPermission: number;
    contentUrl: string;
    categoryId: number;
    permission: number;
    descriptionPlainText: string;
    thumbnailPresent: boolean;
    editable: boolean;
    updateDate: UpdateDate;
    commentsListXML: number;
    creationDate: CreationDate2;
    userID: string;
    languageCode: string;
    permalink: string;
    eventGroupList: EventGroupList[];
    views: number;
    filesList: any[];
    tagListXML: number;
    tagList: string[];
    thumbnailRect: string;
    eventMetaLink: string;
}

export interface IFeed {
    paginationInfo: PaginationInfo;
    list: List[];
}