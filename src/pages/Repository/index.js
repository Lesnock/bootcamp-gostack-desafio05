import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import github from '../../services/github'

// Components
import PageLoad from '../../components/PageLoad'
import { Container, Owner, List, SelectState, PageButtons } from './styles'

// Icons
import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa'

export default class Repository extends Component {
    state = {
        repository: {},
        issues: [],
        issueState: 'all',
        page: 1,
        loading: true,
        issueLoading: false,
    }

    async componentDidMount () {
        const { match } = this.props
        const { page } = this.state

        const repoName = decodeURIComponent(match.params.repository)

        // Get repository and issues
        const [repository, issues] = await Promise.all([
            github.get(`/repos/${repoName}`),
            github.get(`/repos/${repoName}/issues`, {
                params: {
                    per_page: 5,
                    state: 'all',
                    page,
                },
            }),
        ])

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        })
    }

    async fetchIssues () {
        this.setState({ issueLoading: true })

        const { match } = this.props
        const { page, issueState } = this.state

        const repoName = decodeURIComponent(match.params.repository)

        const issues = await github.get(`/repos/${repoName}/issues`, {
            params: {
                per_page: 5,
                state: issueState,
                page,
            },
        })

        return issues.data
    }

    handleSelectChange = async e => {
        this.setState({ issueState: e.target.value })

        const issues = await this.fetchIssues()
        this.setState({ issues, issueLoading: false })
    }

    toPrevPage = async e => {
        const { page } = this.state

        this.setState({ page: page - 1 })

        const issues = await this.fetchIssues()
        this.setState({ issues, issueLoading: false })
    }

    toNextPage = async e => {
        const { page } = this.state

        this.setState({ page: page + 1 })

        const issues = await this.fetchIssues()
        this.setState({ issues, issueLoading: false })
    }

    render () {
        const { repository, issues, page, loading, issueLoading } = this.state

        if (loading) {
            return <PageLoad />
        }

        return (
            <Container>
                <Link to="/" className="back">
                    <FaArrowLeft />
                    Voltar
                </Link>

                <Owner>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <h1>{repository.name}</h1>
                        <p>{repository.description}</p>
                    </div>
                </Owner>

                <SelectState onChange={this.handleSelectChange}>
                    <option value="all">Todos</option>
                    <option value="open">Abertos</option>
                    <option value="closed">Fechados</option>
                </SelectState>

                <IssueList issues={issues} />

                <PageButtons>
                    <button type="button" disabled={page === 1} onClick={this.toPrevPage}>
                        <FaArrowLeft />
                    </button>
                    <button type="button" onClick={this.toNextPage}>
                        <FaArrowRight />
                    </button>
                </PageButtons>

            </Container>
        )
    }
}

function IssueList ({ issues }) {
    return (
        <List>
            {issues.map(issue => (
                <li key={String(issue.id)}>
                    <img src={issue.user.avatar_url} alt={issue.user.login} />
                    <div>
                        <strong>
                            <a href={issue.html_url}>{issue.title}</a>
                            {issue.labels.map(label => (
                                <span key={String(label.id)}>{label.name}</span>
                            ))}
                        </strong>
                        <p>{issue.user.login}</p>
                    </div>
                </li>
            ))}
        </List>
    )
}

// Prop Types
// Repository.propTypes = {
//     match: propTypes.shape(
//         {
//             params: propTypes.shape(
//                 { repository: propTypes.string() },
//             ),
//         },
//     ).isRequired,
// }
