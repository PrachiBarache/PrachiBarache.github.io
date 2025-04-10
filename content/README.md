# Prachi Barache - Data Science Portfolio

This repository contains the source code for my personal portfolio website, showcasing my data science projects, skills, and professional experience.

## Website

The portfolio is hosted on GitHub Pages and can be accessed at: [https://prachibarache.github.io](https://prachibarache.github.io)

## Technologies Used

- GitHub Pages
- Jekyll (static site generator)
- YAML for configuration and data
- HTML/CSS for styling
- Markdown for content

## Structure

- `_config.yml`: Main configuration file for the Jekyll site
- `index.md`: Main content of the website
- `_data/`: Folder containing YAML data files
  - `projects.yml`: Information about my projects
  - `experience.yml`: My work experience
  - `skills.yml`: My technical skills
  - `education.yml`: My educational background
- `assets/`: Folder for stylesheets and images
  - `css/style.scss`: Custom styling

## Setup for Local Development

1. Install Ruby and Jekyll (if not already installed)
   ```
   gem install jekyll bundler
   ```

2. Clone this repository
   ```
   git clone https://github.com/PrachiBarache/prachibarache.github.io.git
   cd prachibarache.github.io
   ```

3. Install dependencies
   ```
   bundle install
   ```

4. Run the local server
   ```
   bundle exec jekyll serve
   ```

5. Open your browser and go to `http://localhost:4000`

## Customization

To update the website content, modify the corresponding YAML files in the `_data` directory. For example, to add a new project, add an entry to `_data/projects.yml`.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: psbarache@gmail.com
- LinkedIn: [psbarache](https://linkedin.com/in/psbarache)
- GitHub: [PrachiBarache](https://github.com/PrachiBarache)