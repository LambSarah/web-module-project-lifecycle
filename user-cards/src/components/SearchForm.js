import React from 'react'
import {
    Form,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    FormGroup
} from 'reactstrap'

class SearchForm extends React.Component {
    render() {
        return (
            <div>
                <Form inline style={{ justifyContent: 'right' }}>
                    <FormGroup>
                        <Input
                            type="search"
                            name="search"
                            id="nameSearch"
                            placeholder={this.props.searchPlaceholder}
                            onChange={this.props.changeSearchText}
                        />
                    </FormGroup>
                    <FormGroup>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Search Options
                            </DropdownToggle>
                            <DropdownMenu type='select' onChange={this.props.changeSearchSyntax}>
                                <div onClick={this.props.changeSearchSyntax}>
                                    <DropdownItem value='name search' >
                                        Search users by Name
                            </DropdownItem>
                                </div>
                                <DropdownItem value='email search'>
                                    Search users by email
                </DropdownItem>
                                <DropdownItem value='username search'>
                                    Search users by username
                </DropdownItem>
                                <DropdownItem value='user org search'>
                                    Search users by organization name
                </DropdownItem>
                                <DropdownItem value='repo qty search'>
                                    Search by number of repos
                </DropdownItem>
                                <DropdownItem value='user location search'>
                                    Search by location
                </DropdownItem>
                                <DropdownItem value='repo language search'>
                                    Search by programming language
                </DropdownItem>
                                <DropdownItem value='user qty followers search'>
                                    Search users by number of followers
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={this.props.searchApi}>Search</Button>
                    </FormGroup>
                </Form>
            </div>
        )

    }
}
export default SearchForm