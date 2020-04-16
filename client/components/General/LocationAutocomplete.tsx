import PlacesAutocomplete, { Suggestion } from "react-places-autocomplete";
import {Input, Form, Typography} from 'antd'
import React from 'react'
import styled from 'styled-components'

const PlaceTextContainer = styled.div`
    height: 45px;
    padding: 4px;
    padding-left: 14px;
    border-bottom: 1px solid #DAE2EF;
    border-left: 1px solid #DAE2EF;
    border-right: 1px solid #DAE2EF;
    display: flex;
    align-items: center;
`

const PlaceText = styled(Typography.Text)`
    font-family: 'Mark Pro';
`

export const LocationAutocomplete: React.FC<{defaultValue: string, isModifyProfilePage: boolean}> = (props) => {
    return (
        <Form.Item
            label="Location"
            name="location"
            rules={[{ required: !props.isModifyProfilePage, message: !props.isModifyProfilePage ? `Location is required` : '' }]}
        >
            <PlacesAutocomplete>
                {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                    <>
                        <Input 
                            {...getInputProps({
                                id: "address-input"
                            })}
                            defaultValue={props.defaultValue} 
                            placeholder="New York City"/>
                        <PlaceText className="autocomplete-dropdown-container">
                                {loading ? <PlaceTextContainer><PlaceText>Loading...</PlaceText></PlaceTextContainer> : null}
                                {suggestions.map((suggestion: Suggestion) => {
                                    const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                                    const style = suggestion.active
                                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                                    const spread: any = {
                                    ...getSuggestionItemProps(suggestion, {
                                        className,
                                        style
                                    })
                                    };

                                    return (
                                    <PlaceTextContainer {...spread} key={suggestion.id}>
                                        <PlaceText>{suggestion.description}</PlaceText>
                                    </PlaceTextContainer>
                                    );
                                })}
                        </PlaceText>  
                    </>
                )}         
            </PlacesAutocomplete>
        </Form.Item>
    )
}