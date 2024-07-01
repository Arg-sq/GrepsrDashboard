import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/sidebar';
import * as router from 'react-router';
import { GetSidebarState } from '@grepsr/utils/GetSidebarState';

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  jest.spyOn(router, 'useLocation').mockReturnValue({
    search: 'testQueryParameters',
    state: null,
    key: '',
    pathname: '/mock-path',
    hash: ''
  });
});

jest.mock('@grepsr/utils/GetSidebarState');

describe('Sidebar component on desktop view', () => {
  beforeEach(() => {
    (GetSidebarState as jest.Mock).mockReturnValue({ showSidebar: true });
  });
  it('renders sidebar with texts ', async () => {
    const component = render(<Sidebar sidebarWidth={'240px'} />);

    await component.findByText('DataSets');
    expect(component.getByText('DataSets')).toBeInTheDocument();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('Sidebar component on closed view', () => {
  beforeEach(() => {
    (GetSidebarState as jest.Mock).mockReturnValue({ showSidebar: false });
  });
  it('renders sidebar with icon only ', () => {
    const component = render(<Sidebar sidebarWidth={'80px'} />);

    const text = component.queryByText('DataSets');
    expect(text).toBeNull();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
