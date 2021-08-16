interface RepositoryItemProps{
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(params: RepositoryItemProps) {
    return (
        <li>
            <strong>{params.repository.name}</strong>
            <p>{params.repository.description}</p>

            <a href={params.repository.html_url}>Acessar repositório</a>
        </li>
    )
}