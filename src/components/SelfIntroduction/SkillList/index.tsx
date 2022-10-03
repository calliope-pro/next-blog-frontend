import { ProgrammingSkillList } from './ProgrammingSkillList';
import { CertificationsList } from './CertificationsList';
import { ToolList } from './ToolList';

export const SkillList: React.FC = () => {
    return (
        <>
            <ProgrammingSkillList />
            <ToolList />
            <CertificationsList />
        </>
    );
};
