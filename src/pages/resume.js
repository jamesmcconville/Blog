import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume / CV" />
    <h1>Resume</h1>
    <p>Welcome to the Resume</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
