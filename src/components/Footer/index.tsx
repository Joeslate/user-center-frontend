import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'React项目';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: <><GithubOutlined/> Ant Design Pro</>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> Joe GitHub</>,
          href: 'https://github.com/Joeslate',
          blankTarget: true,
        },
        {
          key: 'Baidu',
          title: 'Baidu',
          href: 'https://www.baidu.com',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
