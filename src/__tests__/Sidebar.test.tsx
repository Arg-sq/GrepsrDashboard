import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '@grepsr/components/sidebar';

describe("Sidebar component on desktop view",()=>{

  it('renders sidebar with texts ', async () => {
    const component = render(<Sidebar sidebarWidth={"240px"}/>);
    
    await component.findByText('DataSets');
    expect(component.getByText('DataSets')).toBeInTheDocument();
  })
})

describe("Sidebar component on closed view",()=>{

  it('renders sidebar with icon only ', async () => {
    const component = render(<Sidebar sidebarWidth={"80px"}/>);
    
    const text= await component.findByText('DataSets');
    expect(text).toBeNull();
  })
})
