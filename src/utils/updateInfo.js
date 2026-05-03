import mbInfo from "@/assets/madeByInfos.json";
import config from "@/../package.json";

class Info {
  constructor(data) {
    this.author = data.author;
    this.home = data.home;
    this.homeName = data.homeName || "";
    this.project = data.project;
    this.version = data.version || "1.0.0";
    this.github = data.github || "";
    this.logo = data.logo || "";
  }

  getProject() {
    return this.github.split('https://github.com/')[1] || this.project;
  }
}

const imsyyHome = {
  "author": "imsyy",
  "home": "https://imsyy.top",
  "homeName": "無名の主页",
  "project": "home",
  "version": "4.1.4",
  "github": "https://github.com/imsyy/home",
  "logo": `
 _____ __  __  _______     ____     __
|_   _|  \\/  |/ ____\\ \\   / /\\ \\   / /
  | | | \\  / | (___  \\ \\_/ /  \\ \\_/ /
  | | | |\\/| |\\___ \\  \\   /    \\   /
 _| |_| |  | |____) |  | |      | |
|_____|_|  |_|_____/   |_|      |_|`
};

const iamlzlHome = {
  "author": "李宗霖",
  "home": "https://imlzl.cn",
  "homeName": "李宗霖的主页",
  "project": "home",
  "version": "1.1.3",
  "github": "https://github.com/supine0703/home",
  "logo": `
 _____   __   __  __ _     _____ _
|_   _| /  \\ |  \\/  | |   |___  | |
  | |  / /\\ \\| \\  / | |      / /| |
  | | | |__| | |\\/| | |     / / | |
 _| |_|  __  | |  | | |___ / /__| |___
|_____|_|  |_|_|  |_|_____|_____|_____|`
};

const infoEqual = (a, b) => {
  return (
    a.author === b.author && 
    a.home === b.home && 
    a.homeName === b.homeName && 
    a.project === b.project && 
    a.version === b.version && 
    a.github === b.github
  );
}

// 检查信息完整性
let about = mbInfo.about?.length < 2 ? [imsyyHome, iamlzlHome] : mbInfo.about;

const lastEntry = about[about.length - 1];
const { author, home, name: project, version, github } = config;

if (lastEntry.author !== author) {
  about.push({ author, home, project, version, github, logo: "" });
} else {
  Object.assign(lastEntry, {
    ...(lastEntry.version !== version && { version }),
    ...(lastEntry.github !== github && { github }),
    ...(lastEntry.home !== home && { home })
  });
}

export const infos = about.map(item => new Info(item));

export const infoNum = infos.length;

export const currentInfo = infos[infoNum - 1];

// 控制台输出
export const logInfos = () => {
  const styleTitle1 = "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
  const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
  const styleContent = "color: rgb(30,152,255);";

  infos.forEach(item => {
    const content = `\n\n版本: ${item.version}\n主页: ${item.home}\nGithub: ${item.github}`;
    console.info(`%c${item.homeName ? item.homeName : item.author} %c${item.logo} %c${content}`, styleTitle1, styleTitle2, styleContent);
  });
};

export default { logInfos, infos };
