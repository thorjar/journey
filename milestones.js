/**
 * Career milestone data.
 * To add or update a milestone, edit the entries in this array.
 *
 * Each entry has:
 *   date        - display date (e.g. "Jan 2020" or "2020")
 *   title       - job title or event name
 *   company     - employer or institution (optional)
 *   description - a short summary of what you did / learned
 *   tags        - optional array of skill / tech tags
 */
const milestones = [
  {
    date: "2019",
    title: "Started Data Engineering Journey",
    company: "",
    description:
      "Began learning SQL, Python, and the fundamentals of data pipelines. Completed first online data engineering course.",
    tags: ["SQL", "Python", "ETL"],
  },
  {
    date: "2020",
    title: "Junior Data Engineer",
    company: "Acme Analytics",
    description:
      "Built and maintained ETL pipelines using Apache Spark and Airflow. Worked with data warehouses on AWS Redshift.",
    tags: ["Apache Spark", "Airflow", "AWS Redshift"],
  },
  {
    date: "2021",
    title: "Data Engineer",
    company: "TechCorp",
    description:
      "Designed scalable data lake architecture on AWS S3. Led migration from on-premise Hadoop cluster to cloud-based solution.",
    tags: ["AWS S3", "Hadoop", "Data Lake", "dbt"],
  },
  {
    date: "2022",
    title: "Senior Data Engineer",
    company: "DataDriven Inc.",
    description:
      "Architected real-time streaming pipelines with Apache Kafka. Mentored junior engineers and drove best practices adoption.",
    tags: ["Kafka", "Flink", "Snowflake", "Terraform"],
  },
  {
    date: "2023",
    title: "Staff Data Engineer",
    company: "DataDriven Inc.",
    description:
      "Spearheaded company-wide data platform modernisation. Introduced DataOps practices and reduced pipeline failure rate by 40%.",
    tags: ["DataOps", "Kubernetes", "Great Expectations"],
  },
];
