import TabButton from "./TabButton/TabButton.jsx";
import {useState} from "react";
import propTypes from "prop-types";
import {EXAMPLES} from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    handleSelect.propTypes = {selectedButton:propTypes.string}
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
    }
    let tabContent = <p>Please select a topic.</p>;
    if(selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    return (
        <Section title="Example" id="examples" className="test">
            <Tabs
                ButtonContainer="menu"  //{Section}
                buttons={
                <>
                <TabButton isSelected={selectedTopic === 'c'} onClick={() => handleSelect('c')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'j'} onClick={() => handleSelect('j')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'p'} onClick={() => handleSelect('p')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 's'} onClick={() => handleSelect('s')}>State</TabButton>
                </>
            }>{tabContent}</Tabs>
        </Section>
    )
}
