import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useJobs } from '../../../../hooks/useJobs';
import { jobs } from '../../../../mocks/Jobs';
import { ApplicationsThisMonth } from './ApplicationsThisMonth';

jest.mock('../../../../hooks/useJobs');

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string): string => str,
        };
    },
}));

describe('ApplicationsThisMonth', () => {

    it('renders loading state when loading jobs', () => {
        (useJobs as jest.Mock).mockReturnValue({
            jobs: null,
            isLoading: true,
            error: null,
        });

        const { getByText } = render(<BrowserRouter><ApplicationsThisMonth /></BrowserRouter>);

        expect(getByText('Loading')).toBeInTheDocument();
        expect(getByText('Nearly there...')).toBeInTheDocument();
    });

    it('renders error state when loading jobs fails', () => {
        (useJobs as jest.Mock).mockReturnValue({
            jobs: null,
            isLoading: false,
            error: 'Could not find jobs.',
        });

        const { getByText } = render(<BrowserRouter><ApplicationsThisMonth /></BrowserRouter>);

        expect(getByText('Error')).toBeInTheDocument();
        expect(getByText('Could not find jobs.')).toBeInTheDocument();
    });

    it('renders the number of jobs created this month', async () => {
        (useJobs as jest.Mock).mockReturnValue({
            jobs,
            isLoading: false,
            error: null,
        });

        const { getByText, getByTestId } = render(<BrowserRouter><ApplicationsThisMonth /></BrowserRouter>);

        await waitFor(() => expect(getByTestId('count')).toBeInTheDocument());

        expect(getByText('2')).toBeInTheDocument();
    });
});
