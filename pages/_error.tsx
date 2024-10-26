export default function Error({ statusCode }: { statusCode: number }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on the server`
                : 'An error occurred on the client'}
        </p>
    );
}
