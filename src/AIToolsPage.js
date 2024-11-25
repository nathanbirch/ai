import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a0dad', // Galaxy grape color
    },
    secondary: {
      main: purple[500],
    },
  },
});

const tools = [
  {
    title: 'Copilot',
    subtitle: 'AI code assistant by GitHub',
    description:
      'Copilot helps you write code faster by providing AI-based code suggestions.',
    link: 'https://github.com/features/copilot',
    usage:
      'Copilot can assist developers in writing repetitive code, generate entire functions, and reduce syntax errors by providing real-time suggestions.',
  },
  {
    title: 'Tabnine',
    subtitle: 'AI-driven autocompletion for code',
    description:
      'Tabnine helps developers with AI-powered code autocompletion in multiple programming languages.',
    link: 'https://www.tabnine.com/',
    usage:
      'Tabnine integrates with popular IDEs to provide advanced autocompletion, helping developers write clean and efficient code quickly.',
  },
  {
    title: 'Kite',
    subtitle: 'AI-powered code completions',
    description:
      'Kite uses AI to provide intelligent code completions for Python, JavaScript, and other languages.',
    link: 'https://www.kite.com/',
    usage:
      'Kite helps developers write code faster by providing context-aware completions and in-line documentation.',
  },
  {
    title: 'DeepCode',
    subtitle: 'AI code review for better quality',
    description:
      'DeepCode provides AI-driven code review and identifies potential issues in your code.',
    link: 'https://www.deepcode.ai/',
    usage:
      'DeepCode helps developers improve code quality by catching bugs, vulnerabilities, and other potential issues during code reviews.',
  },
  {
    title: 'Codex by OpenAI',
    subtitle: 'AI model powering GitHub Copilot',
    description:
      'Codex is an AI model that translates natural language into code.',
    link: 'https://openai.com/research/codex',
    usage:
      'Codex can be used to generate code snippets, automate coding tasks, and even build entire applications using natural language commands.',
  },
  {
    title: 'Ponicode',
    subtitle: 'AI for unit testing',
    description:
      'Ponicode helps you generate unit tests for your code using AI.',
    link: 'https://www.ponicode.com/',
    usage:
      'Ponicode makes it easier for developers to write comprehensive unit tests, improving code quality and reliability.',
  },
  {
    title: 'Sourcery',
    subtitle: 'Automated code review tool',
    description:
      'Sourcery helps developers refactor their code with AI-driven suggestions.',
    link: 'https://sourcery.ai/',
    usage:
      'Sourcery provides instant feedback on your code and suggests refactoring opportunities to make it cleaner and more maintainable.',
  },
  {
    title: 'Repl.it Ghostwriter',
    subtitle: 'AI pair programmer for Repl.it',
    description:
      'Ghostwriter is an AI that helps you write code in Repl.it by providing real-time suggestions.',
    link: 'https://replit.com/site/ghostwriter',
    usage:
      'Ghostwriter can help developers quickly prototype code, generate functions, and understand complex snippets.',
  },
  {
    title: 'Tabby',
    subtitle: 'Open-source code completion',
    description: 'Tabby is an open-source AI code completion tool.',
    link: 'https://tabby.ml/',
    usage:
      'Tabby assists developers by providing context-based code completions, similar to other commercial AI tools.',
  },
  {
    title: 'Intellicode by Microsoft',
    subtitle: 'AI-assisted development in Visual Studio',
    description:
      'Intellicode provides AI-driven suggestions and autocompletions in Visual Studio.',
    link: 'https://visualstudio.microsoft.com/services/intellicode/',
    usage:
      'Intellicode helps developers be more productive by offering recommendations based on patterns found in popular open-source projects.',
  },
  {
    title: 'Polly',
    subtitle: 'AI for A/B testing and surveys',
    description:
      'Polly is an AI tool for generating quick surveys and feedback.',
    link: 'https://www.polly.ai/',
    usage:
      'Polly helps software teams gather feedback quickly, enabling more informed decision-making during development.',
  },
  {
    title: 'Diffblue Cover',
    subtitle: 'Automated unit test writing',
    description:
      'Diffblue Cover uses AI to automatically write unit tests for Java code.',
    link: 'https://www.diffblue.com/',
    usage:
      'Diffblue Cover helps Java developers by generating unit tests, saving time and ensuring more reliable code.',
  },
  {
    title: 'Codiga',
    subtitle: 'AI-powered code analysis',
    description:
      'Codiga helps developers analyze and refactor code with AI-driven insights.',
    link: 'https://www.codiga.io/',
    usage:
      'Codiga helps improve code quality by providing real-time analysis and identifying potential issues during development.',
  },
  {
    title: 'ML.NET',
    subtitle: 'Machine learning for .NET developers',
    description:
      'ML.NET is an open-source, cross-platform machine learning framework for .NET.',
    link: 'https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet',
    usage:
      'ML.NET enables developers to add machine learning capabilities to their .NET applications without requiring extensive data science knowledge.',
  },
  {
    title: 'DataRobot',
    subtitle: 'Automated machine learning',
    description:
      'DataRobot automates the process of building, deploying, and maintaining machine learning models.',
    link: 'https://www.datarobot.com/',
    usage:
      'DataRobot helps developers integrate machine learning into their applications quickly and efficiently, without needing to build models from scratch.',
  },
  {
    title: 'Spell',
    subtitle: 'AI infrastructure for machine learning',
    description:
      'Spell provides tools for managing machine learning experiments and workflows.',
    link: 'https://spell.ml/',
    usage:
      'Spell helps developers and data scientists manage and scale their machine learning experiments, making it easier to collaborate and deploy models.',
  },
  {
    title: 'Jupyter Notebook with AI Plugins',
    subtitle: 'AI-enhanced interactive development',
    description:
      'Jupyter Notebook can be enhanced with AI plugins to provide code suggestions and facilitate data analysis.',
    link: 'https://jupyter.org/',
    usage:
      'AI plugins for Jupyter Notebook help developers and data scientists write cleaner code and perform data analysis more efficiently.',
  },
  {
    title: 'Cloud Annotations',
    subtitle: 'Labeling tool for AI models',
    description:
      'Cloud Annotations is an open-source tool for labeling datasets for machine learning.',
    link: 'https://cloud.annotations.ai/',
    usage:
      'Cloud Annotations helps developers create labeled datasets for training AI models, making it easier to build custom machine learning models.',
  },
  {
    title: 'Codex Playground',
    subtitle: 'Explore OpenAI Codex capabilities',
    description:
      'Codex Playground allows developers to experiment with OpenAI Codex to generate code.',
    link: 'https://beta.openai.com/codex/',
    usage:
      'Developers can use Codex Playground to explore how Codex can generate code snippets, functions, and even entire applications from natural language descriptions.',
  },
];

const AIToolCard = ({ tool }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: '#ece8f9', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant='h5' color='primary'>
          {tool.title}
        </Typography>
        <Typography variant='subtitle1' color='secondary'>
          {tool.subtitle}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {tool.description}
        </Typography>
        <Button
          variant='outlined'
          color='primary'
          href={tool.link}
          target='_blank'
          rel='noopener noreferrer'
          style={{ marginTop: '10px' }}>
          Learn More
        </Button>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
          style={{ float: 'right' }}>
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='body1'>{tool.usage}</Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const AIToolsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant='h4' color='primary' gutterBottom>
          20 AI Tools for Software Developers
        </Typography>
        <Grid container spacing={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AIToolCard tool={tool} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AIToolsPage;
