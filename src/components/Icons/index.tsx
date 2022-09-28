import { BsLine } from 'react-icons/bs';
import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import {
    SiDjango,
    SiFastapi,
    SiNextdotjs,
    SiNumpy,
    SiNuxtdotjs,
    SiPandas,
    SiPytorch,
    SiScikitlearn,
    SiSelenium,
    SiSvelte,
    SiTypescript,
} from 'react-icons/si';

export const LineIcon: React.FC = () => {
    return <BsLine size={24} color="#06C755" />;
};

export const PythonIcon: React.FC = () => {
    return <FaPython fontSize={26} />;
};

export const JavaScriptIcon: React.FC = () => {
    return <IoLogoJavascript fontSize={24} />;
};

export const DjangoIcon: React.FC = () => {
    return <SiDjango fontSize={24} />;
};

export const FastapiIcon: React.FC = () => {
    return <SiFastapi fontSize={24} />;
};

export const SeleniumIcon: React.FC = () => {
    return <SiSelenium fontSize={24} />;
};

export const PytorchIcon: React.FC = () => {
    return <SiPytorch fontSize={24} />;
};

export const NumpyIcon: React.FC = () => {
    return <SiNumpy fontSize={24} />;
};

export const PandasIcon: React.FC = () => {
    return <SiPandas fontSize={24} />;
};

export const ScikitLearnIcon: React.FC = () => {
    return <SiScikitlearn fontSize={28} />;
};

export const ReactIcon: React.FC = () => {
    return <FaReact fontSize={24} />;
};

export const NextjsIcon: React.FC = () => {
    return <SiNextdotjs fontSize={24} />;
};

export const SvelteIcon: React.FC = () => {
    return <SiSvelte fontSize={24} />;
};

export const VueIcon: React.FC = () => {
    return <IoLogoVue fontSize={24} />;
};

export const NuxtIcon: React.FC = () => {
    return <SiNuxtdotjs fontSize={24} />;
};

export const TypeScriptIcon: React.FC = () => {
    return <SiTypescript fontSize={22} />;
};
